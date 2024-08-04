// METHODS
// Methods are functions that are stored as object properties. They are used to perform actions on objects. In JavaScript, methods are defined as functions 
// inside object literals, classes, and prototypes. You can call a method using the dot notation (.) followed by the method name and parentheses.

// Box-Wrapped Primitive Values
/*
    JavaScript provides a way to use primitive values as objects by wrapping them in objects. This allows you to access methods and properties of primitive values.
    You can any of these types as objects thanks to the built-in object wrappers:
        - String 
        - Number
        - Boolean
        - Symbol
        - BigInt
*/

// String Methods
/*
    Strings have several built-in methods that allow you to manipulate and work with strings. Here are some commonly used string methods:
        - length: Returns the length of a string
        - toUpperCase(): Converts a string to uppercase
        - toLowerCase(): Converts a string to lowercase
        - charAt(): Returns the character at a specified index
        - charCodeAt(): Returns the Unicode value of the character at a specified index
        - indexOf(): Returns the index of the first occurrence of a specified value
        - lastIndexOf(): Returns the index of the last occurrence of a specified value
        - includes(): Returns true if a string contains a specified value, otherwise false
        - startsWith(): Returns true if a string starts with a specified value, otherwise false
        - endsWith(): Returns true if a string ends with a specified value, otherwise false
        - slice(): Extracts a part of a string and returns a new string
        - substring(): Extracts the characters between two specified indices
        - replace(): Replaces a specified value with another value in a string
        - split(): Splits a string into an array of substrings
        - trim(): Removes whitespace from both ends of a string
*/

// Example of String Methods
let str = 'Hello, World!';
console.log(str.length); // 13
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase()); // hello, world!
console.log(str.charAt(7)); // W
console.log(str.charCodeAt(7)); // 87
console.log(str.indexOf('o')); // 4
console.log(str.lastIndexOf('o')); // 8
console.log(str.includes('World')); // true
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('World!')); // true
console.log(str.slice(7)); // World!
console.log(str.substring(7, 12)); // World | NOTE: The other version of this method, .substr(), is deprecated
console.log(str.replace('World', 'Universe')); // Hello, Universe!
console.log(str.split(' ')); // ['Hello,', 'World!']
console.log(str.trim()); // Hello, World!


// Number Methods
/*
    Numbers have several built-in methods that allow you to work with numbers. Here are some commonly used number methods:
        - toExponential(): Converts a number to exponential notation
        - toFixed(): Formats a number using fixed-point notation
        - toPrecision(): Formats a number to a specified length
        - toString(): Converts a number to a string
        - valueOf(): Returns the primitive value of a number
*/

// Example of Number Methods
let num = 123.456;
console.log(num.toExponential()); // 1.23456e+2
console.log(num.toFixed(2)); // 123.46
console.log(num.toPrecision(4)); // 123.5
console.log(num.toString()); // 123.456
console.log(num.valueOf()); // 123.456

// Boolean Methods
/*
    Booleans have several built-in methods that allow you to work with boolean values. Here are some commonly used boolean methods:
        - toString(): Converts a boolean to a string
        - valueOf(): Returns the primitive value of a boolean
*/

// Example of Boolean Methods
let bool = true;
console.log(bool.toString()); // true
console.log(bool.valueOf()); // true

// Symbol Methods
/*
    Symbols have several built-in methods that allow you to work with symbols. Here are some commonly used symbol methods:
        - toString(): Converts a symbol to a string
        - valueOf(): Returns the primitive value of a symbol
*/

// Example of Symbol Methods
let sym = Symbol('foo');
console.log(sym.toString()); // Symbol(foo)
console.log(sym.valueOf()); // Symbol(foo)

// BigInt Methods
/*
    BigInts have several built-in methods that allow you to work with BigInt values. Here are some commonly used BigInt methods:
        - toString(): Converts a BigInt to a string
        - valueOf(): Returns the primitive value of a BigInt
*/

// Example of BigInt Methods

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt.toString()); // 1234567890123456789012345678901234567890
console.log(bigInt.valueOf()); // 1234567890123456789012345678901234567890

// Method Chaining
/*
    Method chaining is a technique in JavaScript that allows you to call multiple methods on an object in a single line of code. 
    This is achieved by returning the object itself from each method call. This allows you to chain multiple method calls together.
*/

// Example of Method Chaining
let text = 'Hello, World!';
let newText = text.toUpperCase().replace('WORLD', 'Universe').split(' ');
console.log(newText); // ['HELLO,', 'Universe!']