// VARIABLES
/*
    Variables are names you give to memory addresses that store data.
    Since JavaScript is a dynamically typed language, you don't need to specify the type of the variable.
*/


// Declaration
// You can declare a variable using the var, let, or const keyword.
var a;

// Initalization/Assignment
/*
    Initalization is when you assign a value to a variable for the first time.
    Assignment is when you assign a value to a variable after it has been declared.
*/

// You can assign a value to a variable using the assignment operator (=).
a = 10;

// You can assign a value to a variable during declaration.
var b = 20;

// You can declare multiple variables in a single line.
var c, d, e;

// You can also declare and assign multiple variables in a single line.
var f = 30, g = 40, h = 50;

// This is called a comma-separated list of variables.
var i, j = 60, k;

// THE VAR KEYWORD
/* 
    The (var) keyword is used to declare a variable has function scope, meaning it is only accessible 
    within the function it is declared in. So if you decalre a variable using the var keyword outside a 
    function, it is a global variable. (var)s don't need to be initialized when declared, and you can reassign
    a value to a var.
*/

// THE LET KEYWORD
/* 
    The (let) keyword is used to declare a variable has block scope, meaning it is only accessible 
    within the block it is declared in. A block is a set of statements enclosed in curly braces ({}).

    In this example the variable (n) is a global variable and the variable (o) is a local variable.
    You can access the global variable (n) within the block because it is a global variable. But not
    the local variable (o). You also cant access the local variable (o) to blocks within the block it is.
*/

/*
    Heres an example to show the differnce between (var) and (let).
    In this example, the variable (x) is accessible outside the block because it is declared using the 
    (var) keyword, so it's accessable anywhere in the function. The variable (y) is not accessible outside 
    the block because it is declared using the (let) keyword, so it's only accessible within the block.
*/

function example() {
    if (true) {
        var x = 'I am var';
        let y = 'I am let';
        console.log('Inside block:');
        console.log('x:', x); // (x) is accessible here
        console.log('y:', y); // (y) is accessible here
    }

    console.log('Outside block:');
    console.log('x:', x); // (x) is still accessible here because var is function-scoped
    console.log('y:', y); // ReferenceError: (y) is not defined because let is block-scoped
}



// THE CONST KEYWORD
/* 
    The (const) keyword is the same as let in the fact that it is block-scoped. The only difference is 
    that you can't reassign a value to a variable declared using the const keyword. They also need to be 
    initialized when declared.
*/

const l = 70;

// Uncomment this line to see the error
// l = 80;