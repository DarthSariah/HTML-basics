/**
 * Operators are used to perform operations on variables and values.
 * In JavaScript, there are many different types of operators.
 * But the most basic operators are:
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 *
 * Arithmetic Operators are used to perform arithmetic between variables and/or values.
 * The most common arithmetic operators are:
 * 1. Addition (+)
 * 2. Subtraction (-)
 * 3. Multiplication (*)
 * 4. Division (/)
 * 5. Modulus (%)
 * 6. Exponentiation (**)
 *
 * The following code will print the result of various arithmetic operations.
 * The result of each operation is stored in a variable.
 * The variables are then printed to the console.
 */
let x = 5;
let y = 2;

let addition = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x / y;
let modulus = x % y;
let exponentiation = x ** y;

console.log(addition); // 7
console.log(subtraction); // 3
console.log(multiplication); // 10
console.log(division); // 2.5
console.log(modulus); // 1
console.log(exponentiation); // 25

/**
 * Assignment Operators are used to assign values to variables.
 * The 'equal to' operator (=) assigns a value to a variable.
 *
 * The following code will print the result of various assignment operations.
 */
let a = 5;
let b = 2;

a += b; // a = a + b (7)
a -= b; // a = a - b (5)
a *= b; // a = a * b (10)
a /= b; // a = a / b (5)
a %= b; // a = a % b (1)
a **= b; // a = a ** b (25)

/**
 * Comparison Operators are used to compare two values.
 * The most common comparison operators are:
 * 1. Equal to (==)
 * 2. Not equal to (!=)
 * 3. Greater than (>)
 * 4. Less than (<)
 * 5. Greater than or equal to (>=)
 * 6. Less than or equal to (<=)
 *
 * If we add one more equal sign to the equal operators, we get strict equal operators.
 * The strict equal operators are:
 * 1. Strict equal to (===)
 * 2. Strict not equal to (!==)
 *
 * By strict we mean that the data type of the values being compared must be the same. (===, !==)
 * Example: 5 === "5" is false because the data type of 5 is number and the data type of "5" is string.
 * Example: 5 == "5" is true even though the data type of 5 is number and the data type of "5" is string.
 *
 * The double equal operators (==, !=) are not strict and this is called type coercion.
 * Type coercion is the automatic or implicit conversion of values from one data type to another.
 * Coercion is dangerous because it can lead to unexpected results and bugs in your code.
 *
 * To change the data type of a value (usually String) to a number, we can use the Number() function.
 * The Number() function converts the object argument to a number that represents the object's value.
 * Example: Number("5") is 5
 * Example: Number("John") is "NaN" (Not a Number)
 */
let c = 5;
let d = 2;

console.log(c == d); // false
console.log(c != d); // true
console.log(c > d); // true
console.log(c < d); // false
console.log(c >= d); // true
console.log(c <= d); // false

/**
 * Logical Operators are used to determine the logic between variables or values.
 * The most common logical operators are:
 * 1. AND (&&)
 * 2. OR (||)
 * 3. NOT (!)
 */
let e = 5;
let f = 2;

console.log(e == 5 && f == 2); // true
console.log(e == 5 || f == 2); // true
console.log(!(e == 5)); // false
console.log(!(f == 2)); // false
console.log(!(e == 5 && f == 2)); // false
console.log(!(e == 5 || f == 2)); // false
