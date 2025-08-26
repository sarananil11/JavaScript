// returns the index num of the first element which satisfies the condition.

const num = [5,10,15];
const result = num.findIndex( n => n > 9);
console.log(result);


// using wrong condition always gives op = -1.
const num1 = [5,10,15];
const result1 = num1.findIndex( n => n > 20);
console.log(result1);