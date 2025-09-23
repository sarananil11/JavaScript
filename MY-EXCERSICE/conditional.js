const prompt = require("prompt-sync")();

let age = prompt("Enter your age : ");
let alert;
if(age == 0){
    console.log("Age can't be 0")
}
else if(age >= 18){
    console.log("eligible")
}
else{
    console.log("not eligible")
}