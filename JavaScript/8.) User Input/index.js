// ! HTML NEEDED !

// USER INPUT
// You can accept user input in JavaScript using the prompt() function or an HTML textbox.

// prompt() Function
/*
    The prompt() function is a built-in function in JavaScript that displays a dialog box with a message and an input field for the user to enter text. 
    The prompt() function takes an optional argument that specifies the message to display in the dialog box. The function returns the text entered by the user as a string.
*/

let name = prompt('Enter your name (via prompt function): ');
console.log(`Hello, ${name}!`);


// HTML Textbox
/*
    You can also accept user input using an HTML textbox. You can create an input element of type text in an HTML file and access its value using JavaScript.
    You can find the HTML texthbox in the index.html file.
*/

let textbox = document.getElementById('input');
let button = document.getElementById('button');

button.addEventListener('click', function() {
    let output = document.getElementById('output');
    let text = textbox.value;
    output.innerText = `Hello, ${text}!`;
});
