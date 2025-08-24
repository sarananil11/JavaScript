//reduce array into single value

let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);



//my example
let akkangal = [3, 3, 4, 5];
let thuka = akkangal.reduce((acc, akkangal) => acc + akkangal, 0);
console.log(`aake thuka ithaan:`, thuka);


//another example
let n=[99,745,92,905,8828];
let nNeg=n.reduce((acc,n)=> acc - n, 0);
console.log(nNeg);
