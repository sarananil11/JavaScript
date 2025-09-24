// Program to swap two numbers without using a third variable

const prompt = require("prompt-sync")();

let a = prompt("Enter a number : ");
let b = prompt("Enter another number : ");
a = Number(a);
b = Number(b);

console.log("Befor swapping, a is :", a ,"and b is: ", b);

[a,b]= [b,a]; // swapped a and b. this is ES6 new method

// this is also another method.
// a = a + b;
// b = a - b;
// a = a - b;

console.log(`After swapping, a is : ${a} and b is : ${b}`);