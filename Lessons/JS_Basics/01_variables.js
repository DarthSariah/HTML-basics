/**
 * Variables are used to store information to be referenced and manipulated in a computer program.
 * They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.
 * It is helpful to think of variables as containers that hold information.
 * Their sole purpose is to label and store data in memory.
 * This data can then be used throughout your program.
 *
 * In JavaScript, there are three ways to declare a variable:
 *
 * var
 * let
 * const
 *
 * var is the old way of declaring variables. (don't use it)
 * let and const are the new ways of declaring variables.
 *
 * let and const are very similar.
 * The main difference between them is that const cannot be reassigned.
 */

/**
 * Variables can be declared and assigned in the same line.
 */
let myName = "John";

/**
 * Variables can be declared and assigned in separate lines.
 * This is called initialization.
 * The variable is initialized with the value of undefined.
 * This is because we have not assigned a value to the variable yet.
 * We can assign a value to the variable later in our code.
 * This is called assignment.
 * We can assign a value to the variable using the assignment operator (=).
 * The assignment operator (=) assigns a value to a variable.
 * The assignment operator (=) is different from the 'equal to' operator (===).
 * The 'equal to' operator (===) checks whether the two values are equal.
 */
let myAge; // undefined
myAge = 18;

/**
 * Constants are similar to let variables.
 * The difference is that the value of a constant cannot be changed once it is assigned.
 * This is why we call them constants.
 * Constants are useful for storing data that never needs to change.
 * Constants are declared using the const keyword.
 * Constants must be initialized with a value.
 */
const PI = 3.14;

/**
 * Variables created with the let keyword can be reassigned.
 */
let myFavoriteColor = "blue";
myFavoriteColor = "red";

/**
 * Variables created with the const keyword cannot be reassigned.
 * The following code will throw an error:
 */
const myFavoriteFood = "pizza";
// myFavoriteFood = "pasta"; // TypeError: Assignment to constant variable.
