// flattens nested array to single level array ( depth can be specified).

const nested = [1, [2, [3]]];
const flat1 = nested.flat();  // level 1 (by default)
console.log(flat1);

const flat2 = nested.flat(2);  // level 2
console.log(flat2);





// my example
const arr = [1, 2, 3, [4, 5], 6, [7, [8]], 9];
const arrFlat1 = arr.flat(); // level 1
const arrFlat2 = arr.flat(2); //level 2
console.log(arrFlat1);
console.log(arrFlat2);
