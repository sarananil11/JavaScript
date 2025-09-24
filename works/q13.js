const prompt = require("prompt-sync")();

let str = prompt("Enter a string : ");
let reversed_STRING = str.split("").reverse().join(''); // splits the string, reverses the string, then joins the string.

if (str === reversed_STRING) {
    console.log("Palindrome");
}
else {
    console.log("Not palindrome");
}