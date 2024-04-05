// Store input number
const num1 = parseInt(prompt("enter the first number:"));
const num2 = parseInt(prompt("enter the second number:"));

// add two number:

let sum = num1 + num2;

// display the sum:

document.getElementById("demo").innerHTML = `The sum of ${num1} and ${num2} is ${sum}`;