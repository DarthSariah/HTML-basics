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

/**
 * To get a character at a specified index in a string, you can use the charAt() method.
 * The charAt() method returns the character at the specified index in a string.
 * Example: "John Doe".charAt(0) is "J"
 * Example: "John Doe".charAt(4) is " "
 */

/**
 * To find the index of a character in a string, you can use the indexOf() method.
 * The indexOf() method returns the index of the first occurrence of a specified value in a string.
 * Example: "John Doe".indexOf("J") is 0
 * Example: "John Doe".indexOf("D") is 5
 */

/**
 * To find the last index of a character in a string, you can use the lastIndexOf() method.
 * The lastIndexOf() method returns the index of the last occurrence of a specified value in a string.
 * Example: "John Doe".lastIndexOf("o") is 7
 * Example: "John Doe".lastIndexOf("e") is 8
 */

/**
 * To replace a character in a string, you can use the replace() method.
 * The replace() method replaces a specified value with another value in a string.
 * Example: "John Doe".replace("John", "Jane") is "Jane Doe"
 * Example: "John Doe".replace("Doe", "Smith") is "John Smith"
 */

/**
 * To convert a string to uppercase, you can use the toUpperCase() method.
 * The toUpperCase() method converts a string to uppercase letters.
 * Example: "John Doe".toUpperCase() is "JOHN DOE"
 */

/**
 * To convert a string to lowercase, you can use the toLowerCase() method.
 * The toLowerCase() method converts a string to lowercase letters.
 * Example: "John Doe".toLowerCase() is "john doe"
 */

/**
 * To remove whitespace from both sides of a string, you can use the trim() method.
 * The trim() method removes whitespace from both sides of a string.
 * Example: " John Doe ".trim() is "John Doe"
 */

/**
 * To extract a part of a string, you can use the slice() method.
 * The slice() method extracts a part of a string and returns the extracted part in a new string.
 * Example: "John Doe".slice(0, 4) is "John"
 * Example: "John Doe".slice(5, 8) is "Doe"
 */
