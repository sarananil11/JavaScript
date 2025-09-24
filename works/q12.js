const prompt = require("prompt-sync")();

let isOddorEven = prompt("Enter a number :");

if (isOddorEven%2===0){
    console.log(`${isOddorEven} is even`);
}
else {
    console.log(`${isOddorEven} is odd`);
}