function oddEven(...numbers) {  // rest parameter
    return numbers.map(num => num % 2 === 0 ? `${num} is even` : `${num} is odd`);  // i used map bcoz it returns a new array unlike forEach.

}
console.log(oddEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));  // passing rest arguments.
