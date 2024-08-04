// FUNCTIONS
// Functions in JavaScript are blocks of code that can be defined and then called later. 
// They can take in arguments and return values. Functions are a fundamental part of JavaScript and are used to create reusable code.

// Defining a Function
/*
    You can define a function in JavaScript using the function keyword followed by the function name and a set of parentheses. 
    The function body is enclosed in curly braces. You can also specify parameters inside the normal parentheses.
*/

function greet() {
    console.log(`Hello, World!`);
}

// Calling a Function
/*
    You can call a function in JavaScript by using the function name followed by a set of parentheses. 
    If the function takes parameters, you can pass them inside the parentheses.
*/

greet();

// Function Parameters
/*
    Functions can take parameters, which are values that are passed to the function when it is called. 
    You can specify parameters inside the parentheses when defining the function.
*/

function greet2(name) {
    console.log(`Hello, ${name}!`);
}

greet2('Alice');

// Function Return Values
/*
    Functions can return values using the return keyword. The return statement ends the function and specifies the value to be returned.
*/

function add(a, b) {
    return a + b;
}

let sum = add(3, 5);
console.log(sum); // 8

// Function Expressions
/*
    Function expressions are another way to define functions in JavaScript. 
    You can assign a function to a variable and then call the variable as if it were a function.
*/

let greet3 = function() {
    console.log(`Hello, World!`);
};

greet3();

// Arrow Functions
/*
    Arrow functions are a more concise way to define functions in JavaScript. 
    They use the => syntax and do not require the function keyword.
*/

let greet4 = () => {
    console.log(`Hello, World!`);
};

greet4();

// Function Scope
/*
    Functions in JavaScript have their own scope. Variables declared inside a function are only accessible within that function.
*/


function scope() {
    let message = 'Hello, World!';
    console.log(message);
}

// Uncomment this line to see the error
// console.log(message); // ReferenceError: message is not defined

scope();

// Rest Parameters
/*
    Rest parameters allow you to pass an indefinite number of arguments to a function. 
    The rest parameter is indicated by three dots (...) followed by the parameter name.
*/

function sum2(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

let result = sum2(1, 2, 3, 4, 5);