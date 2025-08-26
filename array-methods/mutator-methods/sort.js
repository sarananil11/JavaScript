let num = [10, 1, 23, 54, -4, 2, 0];
num.sort();
console.log(num);


// numeric sort ascending order
let numbers1 = [4, 2, -1, 3, 1, 7];
numbers1.sort((a, b) => a - b);
console.log(`numbers in ascending order : ${numbers1}`);


// numeric sort descending order
let numbers2 = [4, 2, -1, 3, 1, 7];
numbers2.sort((a, b) => b - a);
console.log(`numbers in ascending order : ${numbers2}`);


// default string sorting is ascending.
let fruits = [`banana`, `apple`, `dates`, `cherry`];
fruits.sort();
console.log(fruits);


// use ".sort((a,b)=> b.localeCompare(a))"  for descending order.
let fruits2 = [`banana`, `apple`, `dates`, `cherry`];
fruits2.sort((a, b) => b.localeCompare(a));
console.log(fruits2);