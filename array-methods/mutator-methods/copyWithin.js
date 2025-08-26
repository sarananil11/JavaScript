// copies a part of the array to another location within the same array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let result = arr.copyWithin(0, 3);
console.log(result);


// 0 is the starting index.
// copies element from index 3 ( 4&5).
//  that 4 & 5 are pasted in the index from 0.
// .copyWithin( target, start, end). end is optional.




// example with end

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let results = arr.copyWithin(0, 3 , 6);
console.log(results);
