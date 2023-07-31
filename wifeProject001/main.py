import BioBot


def main():
    bb = BioBot.BioBot("toterman@mdpi.com", "toterman_MDPI2")
    # bb.login_to_mdpi()
    # bb.login_to_finder()
    bb.load_cookies()

    emails = bb.get_mdpi_emails(keywords=["secondary", "metabolites"], max_pages=5)

    valid_emails = []
    for email in emails:
        scopus_link = bb.get_scopus_link(email)
        if bb.has_reviewer_proceed(email) and scopus_link is not None:
            documents = bb.get_documents_from_scopus(scopus_link)
            if documents < 6:
                continue
            print(email, documents)
            valid_emails.append(email)

    print(f"Found {len(valid_emails)} valid emails")


if __name__ == "__main__":
    main()
