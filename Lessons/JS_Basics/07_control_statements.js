/**
 * Control Statements in JavaScript are used to control the flow of the program.
 * Control Statements are also known as Conditional Statements.
 * The most common Control Statements are:
 * 1. If Statement
 * 2. Switch Statement
 * 3. For Loop
 * 4. While Loop
 * 5. Do-While Loop
 */

/**
 * The If Statement is used to execute a block of code if a condition is true.
 * The If Statement is written using the 'if' keyword followed by a condition in parentheses.
 * The block of code to be executed is written inside curly braces.
 *
 * The following code will print "Hello World" if the variable 'x' is equal to 5.
 */
let x = 5;
if (x === 5) {
  console.log("Hello World");
}

/**
 * The If-Else Statement is used to execute a block of code if a condition is true.
 * If the condition is false, then a different block of code is executed.
 * The 'else' keyword is used to specify the block of code to be executed if the condition is false.
 * The 'else' keyword is followed by the block of code to be executed inside curly braces.
 *
 * The following code will print "Hello World" if the variable 'y' is equal to 5. Otherwise, it will print "Goodbye World".
 */
let y = 5;
if (y === 5) {
  console.log("Hello World");
} else {
  console.log("Goodbye World");
}

/**
 * The If-Else-If Statement is used to execute a block of code if a condition is true.
 * If the condition is false, then a different block of code is executed if another condition is true.
 *
 * The 'else if' keyword is used to specify the block of code to be executed if the condition is false.
 * The 'else if' keyword is followed by the condition in parentheses and the block of code to be executed inside curly braces.
 *
 * You can have as many 'else if' statements as you want.
 *
 * The following code will print "Hello World" if the variable 'z' is equal to 5. Otherwise, it will print "Goodbye World" if the variable 'z' is equal to 10. Otherwise, it will print "See you later World".
 */
let z = 5;
if (z === 5) {
  console.log("Hello World");
} else if (z === 10) {
  console.log("Goodbye World");
} else {
  console.log("See you later World");
}

/**
 * The Switch Statement is used to execute a block of code depending on the value of a variable.
 * The Switch Statement is written using the 'switch' keyword followed by the variable in parentheses.
 * The block of code to be executed is written inside curly braces.
 * The 'case' keyword is used to specify the value of the variable.
 * The 'case' keyword is followed by the value of the variable and a colon (:).
 * The block of code to be executed is written inside curly braces.
 * The 'break' keyword is used to exit the Switch Statement.
 *
 * You can have as many 'case' statements as you want.
 * Default statements are executed if none of the 'case' statements are true.
 *
 * If you do not use the 'break' keyword, then all the statements after the 'case' statement will be executed.
 *
 * The following code will print "Hello World" if the variable 'a' is equal to 5. Otherwise, it will print "Goodbye World" if the variable 'a' is equal to 10. Otherwise, it will print "See you later World".
 */
let a = 5;
switch (a) {
  case 5:
    console.log("Hello World");
    break;
  case 10:
    console.log("Goodbye World");
    break;
  default:
    console.log("See you later World");
}

/**
 * The For Loop is used to execute a block of code a certain number of times.
 * The For Loop is written using the 'for' keyword followed by parentheses.
 * The parentheses contain three statements separated by semicolons (;).
 *
 * The first statement is used to initialize a variable.
 * The second statement is used to specify the condition.
 * The third statement is used to increment the variable.
 *
 * The block of code to be executed is written inside curly braces.
 *
 * The following code will print the numbers from 1 to 10.
 * The variable 'i' is initialized to 1.
 * The condition is that the variable 'i' is less than or equal to 10.
 * The variable 'i' is incremented by 1 after each iteration. (also called step)
 *
 * The For Loop is used when you know the number of times you want to execute the block of code.
 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/**
 * The While Loop is used to execute a block of code while a condition is true.
 * The While Loop is written using the 'while' keyword followed by parentheses.
 * The parentheses contain the condition.
 *
 * The block of code to be executed is written inside curly braces.
 *
 * The following code will print the numbers from 1 to 10.
 * The variable 'i' is initialized to 1.
 * The condition is that the variable 'i' is less than or equal to 10.
 * The variable 'i' is incremented by 1 after each iteration. (also called step)
 *
 * The While Loop is used when you do not know the number of times you want to execute the block of code.
 */
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

/**
 * The Do-While Loop is used to execute a block of code while a condition is true.
 * The Do-While Loop is written using the 'do' keyword followed by the block of code inside curly braces.
 * The 'while' keyword is used to specify the condition in parentheses.
 *
 * The block of code to be executed is written inside curly braces.
 *
 * The following code will print the numbers from 1 to 10.
 * The variable 'b' is initialized to 1.
 * The condition is that the variable 'b' is less than or equal to 10.
 * The variable 'b' is incremented by 1 after each iteration. (also called step)
 *
 * The Do-While Loop is used when you do not know the number of times you want to execute the block of code and you want to execute the block of code at least once.
 */
let b = 1;
do {
  console.log(b);
  b++;
} while (b <= 10);
