/**
 * Arrays in JavaScript are used to store multiple values in a single variable.
 * An array is a special variable, which can hold more than one value at a time.
 * Arrays are declared using square brackets ([]).
 * Array items are separated by commas (,).
 * Array items are indexed starting from 0.
 *
 * Arrays can store different data types.
 */
let myArray = [1, 2, 3, 4, 5]; // array of numbers
let myArray2 = ["John", "Jane", "Jack"]; // array of strings
let myArray3 = [true, false, true]; // array of booleans
let myArray4 = [1, "John", true]; // array of mixed data types

/**
 * You can access array items by referring to the index number.
 * The following code will print the first item in the array myArray.
 * The first item in an array has an index of 0.
 * The second item in an array has an index of 1.
 * The third item in an array has an index of 2.
 */
console.log(myArray[0]); // 1
console.log(myArray[1]); // 2
console.log(myArray[2]); // 3

/**
 * You can change an array item by referring to the index number.
 */
myArray[0] = 10;
console.log(myArray[0]); // 10

/**
 * You can add a new item to an array by using the push() method.
 * The push() method adds a new item to the end of an array.
 */
myArray.push(6);
console.log(myArray); // [10, 2, 3, 4, 5, 6]

/**
 * You can remove an item from an array by using the pop() method.
 * The pop() method removes the last item from an array.
 */
myArray.pop();
console.log(myArray); // [10, 2, 3, 4, 5]

/**
 * You can find the length of an array by using the length property.
 * The length property returns the number of items in an array.
 * The length property is always one more than the highest array index.
 */
console.log(myArray.length); // 5
