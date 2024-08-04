// LOOPS
// Loops are used to execute the same block of code again and again, as long as a certain condition is met.

// There are three types of loops in JavaScript:
/*
    - for loop
    - while loop
    - do...while loop
*/

// For Loop
/*
    The for loop is used to execute a block of code a specified number of times. It consists of three parts:
        - Initialization: Initializes the loop variable
        - Condition: Specifies the condition for executing the block of code
        - Increment/Decrement: Increases or decreases the loop variable

    The for loop syntax is as follows:
    for (initialization; condition; increment/decrement) {
        // code block to be executed
    }
*/

function forLoop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

forLoop();

// While Loop
/*
    The while loop is used to execute a block of code as long as a specified condition is true. It consists of a condition 
    that is evaluated before each iteration.

    The while loop syntax is as follows:
    while (condition) {
        // code block to be executed
    }
*/

function whileLoop() {
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

whileLoop();

// Do...While Loop
/*
    The do...while loop is similar to the while loop, but the condition is evaluated after the block of code is executed. This means that 
    the block of code will always be executed at least once.

    The do...while loop syntax is as follows:
    do {
        // code block to be executed
    } while (condition);
*/

function doWhileLoop() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
}

doWhileLoop();

// Loop Control Statements
/*
    Loop control statements are used to control the flow of a loop. There are three loop control statements in JavaScript:
        - break: Terminates the loop and transfers control to the statement following the loop
        - continue: Skips the current iteration of the loop and continues with the next iteration
        - return: Exits the function and returns a value
*/

// Break Statement

function breakStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        console.log(i);
    }
}

breakStatement();

// Continue Statement
/*
    The continue statement is used to skip the current iteration of a loop and continue with the next iteration.
*/

function continueStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}

continueStatement();

// Return Statement
/*
    The return statement is used to exit a function and return a value. It can also be used to return undefined if no value is specified.
*/

function returnStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            return;
        }
        console.log(i);
    }
}

returnStatement();

// Nested Loops
/*
    Nested loops are loops that are placed inside the body of another loop. They are used to perform repetitive tasks that require multiple iterations.
*/
