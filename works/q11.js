// Check if the given number is prime or not.

// It must be a natural number greater than 1 .
// It must only be divisible by 1 and itself .

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number :"));

if (num <= 1) {
    console.log("Number should be greater than 1");
}
else {
    let isPrime = true;

    // checking from 2 to sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break ; // stops the loop
        }
    }
    if (isPrime) {
        console.log(`${num} is prime`);
    }
    else {
        console.log(`${num} is not prime`);
    }
}

