const prompt = require("prompt-sync")();

let answer = prompt("Enter true or false: ");
let success = (answer === "true"); 

// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 2000); // 2 seconds delay
});

// Consume the Promise
myPromise
    .then(result => console.log(result))   // runs if resolved
    .catch(error => console.log(error))    // runs if rejected
    .finally(() => console.log("Promise execution finished!"));
