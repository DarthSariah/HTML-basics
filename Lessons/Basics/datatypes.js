/**
 * Data Types are the classification or categorization of the values we store in variables.
 * In JavaScript, there are many different data types. But the most common data types are:
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Null
 * 7. Undefined
 *
 * The typeof operator can be used to find the data type of a JavaScript variable.
 * The typeof operator returns a string indicating the type of the unevaluated operand.
 *
 * In Javascript, everything is an object except for primitives. (number, string, boolean)
 */

console.log(typeof 1); // number
console.log(typeof "John"); // string
console.log(typeof true); // boolean
console.log(typeof [1, 2, 3]); // object
console.log(typeof { name: "John", age: 18 }); // object

/**
 * You can use typeof with variables as well.
 * The following code will print the data type of the variable myName.
 */
let myName = "John";
console.log(typeof myName); // string
