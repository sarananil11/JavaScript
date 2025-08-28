// Q8: Ternary Operator - Find the minimum of two numbers

const prompt = require(`prompt-sync`)();

let num1 = prompt(`Enter first number: `);
let num2 = prompt(`Enter second number: `);

let result = (num1<num2) ? `${num1} is the minimum` : `${num2} is the minimum`;
console.log(result);

