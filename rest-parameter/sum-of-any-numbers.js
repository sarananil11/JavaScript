function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)  // the logic of using accumulator . refer Reduce.

}

console.log(sum(1,2));
console.log(sum(1,2,3,4,32,11,332,4441,1,-2));  // we can input as many arguments as we need.

