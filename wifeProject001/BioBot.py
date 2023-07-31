import requests
from bs4 import BeautifulSoup
import math
from selenium import webdriver
from selenium.common import JavascriptException
from selenium.webdriver.common.by import By
import json
import time


class BioBot:
    def __init__(self, email, password):
        self.email = email
        self.password = password
        self.reviewer_php_ses_id = None
        self.susy_php_ses_id = None

        print("Initializing driver...")
        options = webdriver.FirefoxOptions()
        options.binary_location = r"C:\Program Files\Mozilla Firefox\firefox.exe"
        options.add_argument("--headless")
        self.driver = webdriver.Firefox(options=options)

    def __del__(self):
        self.driver.quit()

    def get_documents_from_scopus(self, scopus_link):
        if scopus_link is None:
            return 0

        javascript = """
            return ((years) => {
                let x = 0;
                document.querySelector("g.highcharts-series").querySelectorAll("rect").forEach(rect => {
                if (new Date().getFullYear() - rect.point.x <= years) {
                  x += rect.point.y;
                }
              });
              return x;
            })(4);
        """

        self.driver.get(scopus_link)
        time.sleep(3)
        try:
            x = self.driver.execute_script(javascript)
        except JavascriptException:
            print("Javascript pee pee it's pants again! Returning 0")
            return 0

        return x

    def login_to_finder(self):
        self.driver.get("https://reviewer-api.susy.mdpi.com/login")

        print("Logging in to Finder...")
        self.driver.find_element(By.CSS_SELECTOR, "form #inputEmail").send_keys(self.email)
        self.driver.find_element(By.CSS_SELECTOR, "form #inputPassword").send_keys(self.password)
        self.driver.find_element(By.CSS_SELECTOR, "form button.btn").click()

        cookies = self.driver.get_cookies()
        with open("cookies-finder.json", "w") as f:
            json.dump(cookies, f, indent=2)

    def login_to_mdpi(self):
        self.driver.get("https://login.mdpi.com/login")

        print("Logging in to MDPI...")
        self.driver.find_element(By.CSS_SELECTOR, "form #username").send_keys(self.email)
        self.driver.find_element(By.CSS_SELECTOR, "form #password").send_keys(self.password)
        self.driver.find_element(By.CSS_SELECTOR, "form input.button.submit-btn").click()

        cookies = self.driver.get_cookies()
        with open("cookies-mdpi.json", "w") as f:
            json.dump(cookies, f, indent=2)

    def load_cookies(self):
        with open("cookies-finder.json", "r") as f:
            cookies_finder = json.load(f)

        with open("cookies-mdpi.json", "r") as f:
            cookies_mdpi = json.load(f)

        for cookie in cookies_finder:
            if cookie["name"] == "REVIEWERPHPSESSID":
                self.reviewer_php_ses_id = cookie["value"]
                break

        for cookie in cookies_mdpi:
            if cookie["name"] == "SUSYPHPSESSID":
                self.susy_php_ses_id = cookie["value"]
                break

    def get_scopus_link(self, author_email):
        url = f"https://susy.mdpi.com/user/reviewer/checking/448141c36d1ce0deb86f6805a60c61b8?email={author_email}"
        headers = {
            "Cookie": f"SUSYPHPSESSID={self.susy_php_ses_id}",
        }
        request = requests.get(url, headers=headers)
        soup = BeautifulSoup(request.text, "html.parser")

        try:
            scopus_link = soup.select("#user_display_reviewer_notes_container .user-display-item")[8].select("a")[0] \
                .get("href")
        except IndexError:
            scopus_link = None

        return scopus_link

    def get_mdpi_emails(self, keywords, max_pages=1):
        mdpi_url = "https://reviewer-api.susy.mdpi.com/reviewer/"
        headers = {
            "Cookie": f"REVIEWERPHPSESSID={self.reviewer_php_ses_id}",
        }
        params = [
            ["fields[search_type]", "reviewer"],
            ["fields[operators][]", ""],
            ["fields[last_invite_times][]", "2"],
            ["fields[last_invite_times][from]", ""],
            ["fields[last_invite_times][to]", ""],
            ["fields[last_review_times][]", "2"],
            ["fields[h_indexes][from]", "5"],
            ["fields[h_indexes][to]", ""],
            ["fields[sort]", "Relevance Desc"],
            ["fields[exclude_countries][]", "2"],
            ["fields[exclude_countries][]", "3"],
            ["page", "1"],
        ]

        idx = 0
        for keyword in keywords:
            params.append([f"fields[keywords][{idx}]", keyword])
            idx += 1
        param_from_arr = "&".join([f"{param[0]}={param[1]}" for param in params])

        r = requests.get(mdpi_url, headers=headers, params=param_from_arr)
        print(f"Searching for '{keywords}'...")
        print("Getting emails from page 1...")

        soup = BeautifulSoup(r.text, "html.parser")

        number_of_pages = math.ceil(int(soup.select(".featured-top.clearfix h4")[0].text.split(" ")[4]) / 25)
        print(int(soup.select(".featured-top.clearfix h4")[0].text.split(" ")[4]))

        emails = []

        item_infos = soup.select(".item-info span small")

        for item_info in item_infos:
            emails.append(item_info["data-clipboard-text"])

        for page in range(2, min(number_of_pages + 1, max_pages + 1)):
            print(f"Getting page {page}...")
            mdpi = f"{mdpi_url}"

            # find page param
            for param in params:
                if param[0] == "page":
                    param[1] = str(page)

            param_from_arr = "&".join([f"{param[0]}={param[1]}" for param in params])

            r = requests.get(mdpi, headers=headers, params=param_from_arr)
            soup = BeautifulSoup(r.text, "html.parser")
            # get .item-info span small
            item_infos = soup.select(".item-info span small")

            for item_info in item_infos:
                emails.append(item_info["data-clipboard-text"])

        return emails

    def has_reviewer_proceed(self, author_email):
        url = f"https://susy.mdpi.com/user/reviewer/checking/448141c36d1ce0deb86f6805a60c61b8?email={author_email}"
        headers = {
            "Cookie": f"SUSYPHPSESSID={self.susy_php_ses_id}",
        }
        request = requests.get(url, headers=headers)
        soup = BeautifulSoup(request.text, "html.parser")

        proceed_button = soup.select("#keepRviewer")
        if proceed_button:
            return True

        return False
