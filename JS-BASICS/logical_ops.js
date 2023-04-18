// if statement
let age = 18;
let legalAge = 18;

if (age >= legalAge) {
  // console.log("You are allowed to drink");
} else {
  // console.log("You are not allowed to drink");
}

// for loop
//   init; condition; step
for (let i = 0; i < 10; i++) {
  // i++ means i = i + 1, also i += 1 is the same
  // console.log("I love you");
}

let daysOfTheWeek = [
  "Δευτέρα",
  "Τρίτη",
  "Τετάρτη",
  // "Πέμπτη",
  // "Παρασκευή",
  // "Σάββατο",
  "Κυριακή",
];

// console.log(daysOfTheWeek.length);
// console.log(daysOfTheWeek[0]);

for (let i = 0; i < daysOfTheWeek.length; i++) {
  // console.log(daysOfTheWeek[i]);
}

// grocery prices
let prices = [2, 1, 1.5, 3, 2.5, 1.5, 2, 1, 1.5, 3, 2.5, 1.5];

let finalCosts = 0;
for (let i = 0; i < prices.length; i++) {
  finalCosts += prices[i];
}

// console.log(finalCosts);

// while loop
let i = 0;
while (i < 10) {
  // console.log("I love you");
  i++;
}
