// ARITHMETIC OPERATORS
// Arithmetic operators are used to perform arithmetic on numbers (duh).

// These are the arithmetic operators in JavaScript:
/*
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*)
    - Division (/)
    - Modulus (%)
    - Increment (++)
    - Decrement (--)
*/

// Addition
/*
    The addition operator (+) is used to add two numbers together. If you add a number to a string, JavaScript will concatenate the two values.
*/

let sum = 5 + 3;
console.log(sum); // 8

let str = '5' + 3;
console.log(str); // '53'

// Subtraction
/*
    The subtraction operator (-) is used to subtract one number from another.
*/

let difference = 5 - 3;
console.log(difference); // 2

// Multiplication
/*
    The multiplication operator (*) is used to multiply two numbers together.
*/

let product = 5 * 3;
console.log(product); // 15

// Division
/*
    The division operator (/) is used to divide one number by another.
*/

let quotient = 5 / 3;
console.log(quotient); // 1.6666666666666667

// Modulus
/*
    The modulus operator (%) is used to find the remainder of dividing one number by another.
*/

let remainder = 5 % 3;
console.log(remainder); // 2

// Increment
/*
    The increment operator (++) is used to increase the value of a variable by 1.
*/

let x = 5;
x++;
console.log(x); // 6

// Decrement
/*
    The decrement operator (--) is used to decrease the value of a variable by 1.
*/

let y = 5;
y--;
console.log(y); // 4

// Order of Operations
/*
    When performing arithmetic operations, JavaScript follows the order of operations (PEMDAS):
    - Parentheses
    - Exponents
    - Multiplication and Division
    - Addition and Subtraction
*/

let result = 5 + 3 * 2;
console.log(result); // 11

let result2 = (5 + 3) * 2;
console.log(result2); // 16

// Assignment Operators
/*
    Assignment operators are used to assign values to variables. They combine the assignment operator (=) with an arithmetic operator.
*/

let a = 5;
a += 3; // equivalent to a = a + 3

let b = 5;
b -= 3; // equivalent to b = b - 3

let c = 5;
c *= 3; // equivalent to c = c * 3

let d = 5;
d /= 3; // equivalent to d = d / 3

let e = 5;
e %= 3; // equivalent to e = e % 3

console.log(a, b, c, d, e); // 8, 2, 15, 1.6666666666666667, 2

// Math Object
/*
    The Math object in JavaScript provides a set of mathematical functions and constants. You can use these functions and constants to perform complex mathematical operations.
*/

// Math.PI
/*
    The Math.PI property returns the value of pi (π), which is approximately 3.141592653589793.
*/

console.log(Math.PI); // 3.141592653589793

// Math.round()
/*
    The Math.round() method rounds a number to the nearest integer.
*/

let rounded = Math.round(4.7);
console.log(rounded); // 5

// Math.floor()
/*
    The Math.floor() method rounds a number down to the nearest integer.
*/

let floored = Math.floor(4.7);
console.log(floored); // 4

// Math.ceil()
/*
    The Math.ceil() method rounds a number up to the nearest integer.
*/

let ceiled = Math.ceil(4.3);
console.log(ceiled); // 5

// Math.min() and Math.max()
/*
    The Math.min() and Math.max() methods return the smallest and largest numbers in a list of arguments, respectively.
*/

let min = Math.min(1, 2, 3, 4, 5);
console.log(min); // 1

let max = Math.max(1, 2, 3, 4, 5);
console.log(max); // 5

// Math.random()
/*
    The Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive).
*/

let random = Math.random();
console.log(random);

// Math.pow()
/*
    The Math.pow() method returns the base to the exponent power.
*/

let power = Math.pow(2, 3);
console.log(power); // 8

// Math.sqrt()
/*
    The Math.sqrt() method returns the square root of a number.
*/

let squareRoot = Math.sqrt(9);
console.log(squareRoot); // 3

// Math.abs()
/*
    The Math.abs() method returns the absolute value of a number.
*/

let absolute = Math.abs(-5);
console.log(absolute); // 5

// Math.sin(), Math.cos(), Math.tan()
/*
    The Math.sin(), Math.cos(), and Math.tan() methods return the sine, cosine, and tangent of an angle, respectively.
*/

let sin = Math.sin(Math.PI / 2);
console.log(sin); // 1

let cos = Math.cos(0);
console.log(cos); // 1

let tan = Math.tan(Math.PI / 4);
console.log(tan); // 0.9999999999999999

// Math.log()
/*
    The Math.log() method returns the natural logarithm (base e) of a number.
*/

let log = Math.log(Math.E);
console.log(log); // 1

// Math.exp()
/*
    The Math.exp() method returns e (Euler's Number) raised to the power of a number.
*/

let exp = Math.exp(1);
console.log(exp); // 2.718281828459045

// Math.trunc()
/*
    The Math.trunc() method removes the decimal part of a number and returns the integer part.
*/

let truncated = Math.trunc(4.7);
console.log(truncated); // 4

// Math.sign()
/*
    The Math.sign() method returns the sign of a number, indicating whether the number is positive, negative, or zero.
*/

let sign1 = Math.sign(5);
let sign2 = Math.sign(-5);
let sign3 = Math.sign(0);
console.log(sign1, sign2, sign3); // 1, -1, 0

