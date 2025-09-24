// Program to find the area of a rectangle.
const prompt = require("prompt-sync")();

let length = Number(prompt(`Enter the length :`));
let breadth = Number(prompt(`Enter the breadth :`));

let area = length * breadth;
console.log(`Area of rectangle is ${area}`);
