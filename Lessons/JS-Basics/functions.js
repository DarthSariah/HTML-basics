// exchange euro to lei problem
// declare a function
function exchangeEuroToLei(euro, exchangeRate = 5) {
  let lei = euro * exchangeRate;

  console.log(lei);
}

// exchangeEuroToLei(50); // 250
// exchangeEuroToLei(100); // 500

// declare a function
function greetings(name, money) {
  console.log("Hello " + name);
  exchangeEuroToLei(money);
}

// calling the function
greetings("Andra", 300); // Hello Andra
greetings("Stathis", 50); // Hello Stathis
