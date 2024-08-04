// TYPES
// Types are different kinds of data that you can use in JavaScript.

// Primitives
/*
    Primitives are the most basic data types in JavaScript. They are immutable, meaning they cannot be changed.
    They are also not objects, so they don't have methods or properties.
    There are 7 primitive data types in JavaScript:
        - String
        - Number
        - BigInt
        - Boolean
        - Undefined
        - Symbol
        - Null
*/

// Strings
/*
    Strings are sequences of characters enclosed in single (''), double ("") or backtick (``) quotes.
    You can use the (+) operator to concatenate strings. If you surround a string with backticks, you can interpolate variables 
    using the (${variable}) syntax, which is just making concationation easier.
*/

function strings() {
    let name = 'John';
    let age = 30;
    // This console log uses the (+) operator to concatenate strings.
    console.log('My name is ' + name + ' and I am ' + age + ' years old.');
    // This console log uses string interpolation.
    console.log(`Hi, I'm ${name}! I am ${age} years old.`);
}

strings();

// Numbers
/*
    Numbers in javascript are a datatype that is implemented as a 64-bit floating-point number. They represent both integers and 
    floating-point numbers (decimals). They can store integers from -(2^53 - 1) to 2^53 - 1 with percision, and decimals with 
    15-17 points of precision.
*/

// BigInt
/*
    BigInt is a new primitive type in JavaScript that can store integers with arbitrary precision. It is created by appending 
    'n' to the end of an integer. BigInts are useful when you need to store large numbers that are greater than 2^53 - 1.
    You can declare a BigInt by appending 'n' to the end of an integer, or by using the BigInt constructor.
    When you log a bigint to the console, it is displayed with the 'n' at the end to indicate that it's a BigInt.
*/

function numbers() {
    let bigIntLiteral = 90071992547409910797686970897n;
    let bigIntConstructor = BigInt(90071992547409910797686970897);
    console.log(bigIntLiteral, bigIntConstructor);
}

numbers();

// Booleans
/*
    Booleans are a datatype that can only have two values: true or false. They are used to represent the truth value of an expression.
*/

// Undefined
/*
    Undefined is a primitive value that is automatically assigned to variables that have been declared but not assigned a value.
    It is also returned by functions that don't have a return statement.
*/

// Symbol
/*
    Symbols are a new primitive type in JavaScript that are unique and immutable. They are used to create unique identifiers for 
    object properties. You can create a symbol using the Symbol() function.
*/

// Null
/*
    Null is a primitive value that represents the intentional absence of any object value. It is used to represent that a variable 
    has no value.
*/

// Type Conversion
/*
    Type conversion is the process of converting one data type to another. JavaScript has two types of type conversion: implicit and 
    explicit.
*/

// Implicit Type Conversion
/*
    Implicit type conversion is when JavaScript automatically converts one data type to another. This can happen when you use an 
    operator on two different data types, or when you pass a value to a function that expects a different data type.

    In this example, the number 10 is implicitly converted to a string when it is concatenated with the string '20'. The result is
    the string '1020'.
*/

const num = 10;
const str = '20';
const sum = num + str;
console.log(sum); // '1020'


// Explicit Type Conversion
/*
    Explicit type conversion is when you manually convert one data type to another. This can be done using built-in functions like 
    Number(), String(), and Boolean().

    In this example, the string '10' is explicitly converted to a number using the Number() function. The result is the number 10.
*/

const str2 = '10';
const num2 = Number(str2);
console.log(num2); // 10