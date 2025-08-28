// Q5:if...else Statement - Find the largest of two numbers

const prompt = require(`prompt-sync`)();

let n1 = prompt(`Enter the first number : `);
let n2 = prompt(`Enter the second number : `);

if (n1 > n2) {
    console.log(`${n1} is greater than ${n2}`);
    
} else {
    console.log(`${n2} is greater than ${n1}`);
    
}