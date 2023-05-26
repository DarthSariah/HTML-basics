/**
 * Strings are a data type used to represent text and are wrapped in either single or double quotes.
 */
let firstName = "John";
let lastName = "Doe";

/**
 * You can use the + operator to concatenate (join) two strings together.
 */
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe

/**
 * You can use the += operator to concatenate (join) two strings together.
 * The += operator adds the value of the right operand to a variable and assigns the result to the variable.
 * Example: x += y is the same as x = x + y
 */
let fullName2 = "John";
fullName2 += " Doe";
console.log(fullName2); // John Doe

/**
 * To split a string into an array of substrings, you can use the split() method.
 * The split() method splits a string into an array of substrings, and returns the new array.
 * Example: "John Doe".split(" ") is ["John", "Doe"]
 * Example: "John Doe".split("") is ["J", "o", "h", "n", " ", "D", "o", "e"]
 */

/**
 * To get the length of a string, you can use the length property.
 * The length property returns the length of a string (number of characters).
 * Example: "John Doe".length is 8
 */
