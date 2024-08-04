// CONDITIONALS
// Conditionals are used to execute a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

// If Statement
/*
    The if statement is used to execute a block of code if a specified condition is true. If the condition is false, the code block will not be executed.
*/

function ifStatement() {
    let x = 10;
    if (x > 5) {
        console.log('x is greater than 5');
    }
}

ifStatement();

// If-Else Statement
/*
    The if-else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.
*/

function ifElseStatement() {
    let x = 10;
    if (x > 5) {
        console.log('x is greater than 5');
    } else {
        console.log('x is not greater than 5');
    }
}

ifElseStatement();

// Else-If Statement
/*
    The else-if statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false. You can have multiple else-if statements in a single if-else block.
*/

function elseIfStatement() {
    let x = 10;
    if (x > 15) {
        console.log('x is greater than 15');
    } else if (x > 10) {
        console.log('x is greater than 10');
    } else {
        console.log('x is not greater than 10');
    }
}

elseIfStatement();

// Switch Statement
/*
    The switch statement is used to execute a block of code based on the value of a variable. The switch statement evaluates an expression and compares it to the values of case clauses. If a match is found, the code block following the case clause is executed.
*/

function switchStatement() {
    let day = 'Monday';
    switch (day) {
        case 'Monday':
            console.log('Today is Monday');
            break;
        case 'Tuesday':
            console.log('Today is Tuesday');
            break;
        case 'Wednesday':
            console.log('Today is Wednesday');
            break;
        default:
            console.log('Today is not Monday, Tuesday, or Wednesday');
    }
}

switchStatement();

// Ternary Operator
/*
    The ternary operator is a shorthand way of writing an if-else statement. It is used to assign a value to a variable based on a condition.
*/

function ternaryOperator() {
    let x = 10;
    let result = x > 5 ? 'x is greater than 5' : 'x is not greater than 5';
    console.log(result);
}

ternaryOperator();

// Logical Operators
/*
    Logical operators are used to combine multiple conditions in a conditional statement. There are three logical operators in JavaScript: AND (&&), OR (||), and NOT (!).
*/

function logicalOperators() {
    let x = 10;
    let y = 5;
    if (x > 5 && y > 5) {
        console.log('Both x and y are greater than 5');
    }
    if (x > 5 || y > 5) {
        console.log('Either x or y is greater than 5');
    }
    if (!(x > 5)) {
        console.log('x is not greater than 5');
    }
}

logicalOperators();

// Truthy and Falsy Values
/*
    In JavaScript, a value is considered falsy if it is one of the following:
    - false
    - 0
    - ''
    - null
    - undefined
    - NaN
    All other values are considered truthy.
*/

function truthyFalsyValues() {
    let x = 0;
    if (x) {
        console.log('x is truthy');
    } else {
        console.log('x is falsy');
    }
}

truthyFalsyValues();

// Short-Circuit Evaluation
/*
    Short-circuit evaluation is a technique used in conditional statements to improve performance by only evaluating the second operand if the first operand is not sufficient to determine the outcome of the expression.
*/

function shortCircuitEvaluation() {
    let x = 10;
    let y = 5;
    if (x > 5 && y > 5) {
        console.log('Both x and y are greater than 5');
    }
}

shortCircuitEvaluation();

// Conditional Assignment
/*
    Conditional assignment is a shorthand way of assigning a value to a variable based on a condition.
*/

function conditionalAssignment() {
    let x = 10;
    let result = x > 5 ? 'x is greater than 5' : 'x is not greater than 5';
    console.log(result);
}

conditionalAssignment();

// Comparison Operators
/*
    Comparison operators are used to compare two values and return a boolean value based on the comparison. There are eight comparison operators in JavaScript: equal to (==), not equal to (!=), strict equal to (===), strict not equal to (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
*/

function comparisonOperators() {
    let x = 10;
    let y = 5;
    console.log(x == y); // false
    console.log(x != y); // true
    console.log(x === y); // false
    console.log(x !== y); // true
    console.log(x > y); // true
    console.log(x < y); // false
    console.log(x >= y); // true
    console.log(x <= y); // false
}