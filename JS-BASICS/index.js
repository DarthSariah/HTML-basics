// javascript basics - lesson 01

// To run javascript code create a file with .js extension
// Open the terminal and type node <filename.js>

// 0
// To run javascript on your local machine download node.js
// from https://nodejs.org/en/download/
// https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi

// 1 - comments
// 1.1 - single line comment - //
// 1.2 - multi line comment - /* <code> */

// 1.1 - variables

// defined a variable named `name`
let username = "Andra"; // type of `string`
let x = 5; // type of `number`
let boolean = true; // type of `boolean` - true or false

// to print something like a variable we use console.log(<variable>)
// console.log(username);
// we can also print many things by adding a comma to the function console.log
// console.log(username, x);

// math :)
let num1 = 10;
let num2 = 20;

let sum = num1 + num2; // you can also do - addition (+), subtraction (-), multiplication (*), division (/)

// console.log(sum);

// you can also add strings together
let firstName = "Andra";
let lastName = "Toterman";
let age = 25;

let fullName = firstName + " " + lastName + " " + age; // concatenation (+)
// console.log(fullName);

// example of euro to lei conversion
let euro = 50;
let exchangeRate = 4.9;

let lei = euro * exchangeRate;

// we have >, <, >=, <=, ==, != which are called operators
let isMoreThan500 = lei != 500; // true or false
// console.log(isMoreThan500);

// example of lei to euro conversion
let bankAmount = 450; // lei

let exchangeRate2 = 4.9;
let euro2 = bankAmount / exchangeRate2;

let euroINeedToTravel = 140; // I need 140 euro to travel

// console.log("Do I have enough money to travel?: ", euro2 >= euroINeedToTravel);

let moneyINeedInLei = euroINeedToTravel * exchangeRate2; // money I need in lei

// console.log("How much money do I need in lei?: ", moneyINeedInLei - bankAmount);

// 1.2 - arrays - list of items - [] - index starts from 0
let daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// console.log("I wanna go shopping on: " + daysOfTheWeek[6]);

// 1.3 - objects - {} - key value pairs

let person = {
  firstName: "Andra",
  lastName: "Toterman",
  age: 25,
};

// we have 2 ways to access this data
// 1. way using dot notation
// console.log(person.firstName);
// 2. way using bracket notation
// console.log(person["firstName"]);

console.log(
  "My name is " +
    person.firstName +
    " " +
    person.lastName +
    " and I am " +
    person.age +
    " years old."
);
