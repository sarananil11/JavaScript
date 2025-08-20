//all elements in the array should pass the condition

let numbers = [1, 2, 3];
let everyOdd = numbers.every(num => num % 2 === 1);
// console.log(everyOdd);
console.log(`condition is ${everyOdd}`);




//my example

let heigt = [144, 171, 180, 156, 167];
let neededHeight = heigt.every(heigt => heigt >= 144);
console.log(neededHeight);
