/**
 * Functions are a way to group code together to perform a specific task.
 * Functions are written using the 'function' keyword followed by the name of the function.
 * The name of the function is followed by parentheses and a block of code inside curly braces.
 *
 * Functions can take in parameters.
 * Parameters are variables that are passed into the function. We do not to use the 'let' keyword when declaring parameters.
 * Parameters are written inside the parentheses of the function.
 *
 * The following code will print "Hello World" when the function 'helloWorld' is called.
 * The function 'helloWorld' is called by writing the name of the function followed by parentheses.
 */
function helloWorld() {
  // Function Declaration
  console.log("Hello World");
}

helloWorld(); // Function Call

/**
 * Now let's add a parameter to the function 'helloWorld' that will say hello to a specific person.
 * The parameter 'name' is written inside the parentheses of the function.
 * The parameter 'name' is used inside the function to print "Hello" to the person.
 *
 * The following code will print "Hello John" when the function 'helloWorld' is called.
 */
function helloWorld(name) {
  console.log("Hello " + name);
}

helloWorld("John"); // Hello John

/**
 * Functions can return values.
 * The 'return' keyword is used to return a value from a function.
 * The 'return' keyword is followed by the value to be returned.
 * The value to be returned can be a variable, a string, a number, a boolean, etc.
 *
 * Return statements are also used to exit a function without returning a value (like the 'break' keyword in the Loop Statement).
 *
 * The following code will return the value of the variable 'x' when the function 'returnX' is called.
 */
function returnX() {
  let x = 5;
  return x;
}

let x = returnX();
console.log(x); // 5

/**
 * Now let's add a parameter to the function 'return2X' that will return the value of the parameter times 2.
 */
function return2X(x) {
  return x * 2;
}

let x2 = return2X(5);
console.log(x2); // 10

/**
 * Functions can be assigned to variables and can be passed into other functions.
 * To assign a function to a variable, write the 'function' keyword without the name of the function. (This is called an Anonymous Function)
 * The variable is then assigned to the function and can be called like a normal function.
 * To pass a function into another function, write the name of the function as a parameter.
 */
let xTimes3 = function (x) {
  return x * 3;
};

let x3Value = xTimes3(5);
console.log(x3Value); // 15

/**
 * Now let's create a function that takes in a function as a parameter and runs it however many times we want.
 * The function 'runFunction' takes in a function as a parameter and a number as a parameter.
 */
function runFunction(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

/**
 * Now let's create a function that prints "Hello World" and pass it into the function 'runFunction'.
 */
function helloWorld() {
  console.log("Hello World");
}

runFunction(helloWorld, 5); // Hello World, Hello World, Hello World, Hello World, Hello World

/**
 * Now let's create a function that takes in a function as a parameter and returns a function.
 * This is called a Higher Order Function. A Higher Order Function is a function that takes in a function as a parameter or returns a function.
 *
 * The function 'returnFunction' takes in a function as a parameter and returns a function.
 *
 * Let's say you want to create a function that takes in a number and returns a function that multiplies a number by the number passed in.
 */
function returnFunction(num) {
  return function (x) {
    return x * num;
  };
}

let xTimes5 = returnFunction(5); // xTimes5 is now a function that multiplies a number by 5
let xTimes10 = returnFunction(10); // xTimes10 is now a function that multiplies a number by 10

let x5Value = xTimes5(5);
let x10Value = xTimes10(5);

console.log(x5Value); // 25
console.log(x10Value); // 50
