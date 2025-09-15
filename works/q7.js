// Q7: if...else - Check if a number is divisible by both 3 and 5

const prompt = require(`prompt-sync`)();

let number = prompt(`Enter a number : `);

if (number % 3 == 0 && number % 5 == 0) {
    console.log(`Number is divisible by 3 & 5`);

} else {
    console.log(`Number can't be divisible by any of 3 or 5`);

}