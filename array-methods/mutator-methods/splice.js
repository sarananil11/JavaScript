let fruits = [`apple`, `mango`, `orange`];
fruits.splice(1, 1, `pineapple`, `lichi`); //first 1 is starting position (mango) . second 1 is how many elements we should delete  (only mango will be removed. if it is 2, mango and orange will be deleted).
console.log(fruits);

// using numbers
let num= [2,3,77,1,-5,69];
num.splice(3,1, 10);
console.log(num);
