// Program to find the area of a square.

const prompt = require("prompt-sync")();

let input = prompt(`Enter the side of a square :`);
let area = input * input;
area = Number(area);
console.log("area is :", area)

// predefined value
// let x = 5;
// let xArea = x*x;
// console.log(`Area is : ${xArea}`);