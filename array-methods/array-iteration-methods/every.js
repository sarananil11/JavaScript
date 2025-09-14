//all elements in the array should pass the condition

let numbers = [1, 2, 3];
let everyOdd = numbers.every(num => num % 2 === 1);
// console.log(everyOdd);
console.log(`condition is: ${everyOdd}`);




//my example

let height = [144, 171, 180, 156, 167];
let neededHeight = height.every(height => height >= 144);
console.log(neededHeight);
