//transforms each elements and returns a new array.

let numbers = [1, 2, 3, 4];
let double = numbers.map(num => num * 2);
console.log(double);



//my example.
let n = [2, 3, 4, 5];
let div = n.map(num => num / 2);
console.log(div);


//my example of using condition in map
let a = [2, 3, 4, 5, 6];
let aEven = a.map(a => a % 2 == 0 ? a : null);
console.log(aEven);

