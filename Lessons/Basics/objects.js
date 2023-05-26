/**
 * Objects in JavaScript are collections of key-value pairs.
 * An object is a special variable, which can hold more than one value at a time like an array.
 * Objects are declared using curly brackets ({}).
 * Object properties are separated by commas (,).
 *
 * Objects can store different data types.
 * Objects can store arrays.
 * Objects can store other objects.
 *
 * Objects can be accessed by using dot notation or bracket notation.
 *
 * Dot notation:
 * objectName.propertyName
 *
 * Bracket notation:
 * objectName["propertyName"]
 */
let myObject = {
  name: "John",
  age: 18,
  isMale: true,
  hobbies: ["Singing", "Dancing", "Coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
};

console.log(myObject.name); // John
console.log(myObject.hobbies); // ["Singing", "Dancing", "Coding"]
console.log(myObject.address.street); // 123 Main St

console.log(myObject["name"]); // John
console.log(myObject["hobbies"]); // ["Singing", "Dancing", "Coding"]
console.log(myObject["address"]["street"]); // 123 Main St

/**
 * You can change an object property by using dot notation or bracket notation.
 */
myObject.name = "Jane";
console.log(myObject.name); // Jane

myObject["name"] = "Jack";
console.log(myObject["name"]); // Jack

/**
 * You can add a new property to an object by using dot notation or bracket notation.
 */
myObject.isStudent = true;
console.log(myObject.isStudent); // true

myObject["isStudent"] = false;
console.log(myObject["isStudent"]); // false

/**
 * You can remove a property from an object by using the delete keyword.
 */
delete myObject.isStudent;
console.log(myObject.isStudent); // undefined

/**
 * You can find the number of properties in an object by using the Object.keys() method.
 * The Object.keys() method returns an array of the object's property names.
 * The length property returns the number of items in an array.
 */
console.log(Object.keys(myObject)); // ["name", "age", "isMale", "hobbies", "address"]
console.log(Object.keys(myObject).length); // 5

/**
 * You can find the values of an object by using the Object.values() method.
 * The Object.values() method returns an array of the object's property values.
 * The length property returns the number of items in an array.
 */
console.log(Object.values(myObject)); // ["Jack", 18, true, ["Singing", "Dancing", "Coding"], {…}]
console.log(Object.values(myObject).length); // 5

/**
 * You can find the key-value pairs of an object by using the Object.entries() method.
 * The Object.entries() method returns an array of the object's key-value pairs.
 * The length property returns the number of items in an array.
 *
 * Array of arrays.
 */
console.log(Object.entries(myObject)); // [["name", "Jack"], ["age", 18], ["isMale", true], ["hobbies", Array(3)], ["address", {…}]]

/**
 * Object have many built-in methods.
 * You can find the list of built-in methods here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
