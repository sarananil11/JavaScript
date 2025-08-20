//same as reduce but starts from the right side or end of the array

let nums = [10, 20];
let result = nums.reduceRight((acc, curr) => acc - curr, 10);
console.log(result);


//my example

let akkam = [2, 3, 4, 1];
let thuka = akkam.reduceRight((acc, akkam) => akkam + acc, 0);
console.log(thuka);
