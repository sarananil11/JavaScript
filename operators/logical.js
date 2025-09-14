//logical AND ( && )
console.log(`true & true =`, true && true);
console.log(`true & false =`, true && false);


let a = 2;
let b = 21;
let x = a > b && b > a;
console.log(`x is:`, x);



//logical OR ( || )

console.log(`true or false:`, true || false);
console.log(`false or false:`, false || false);


let y = a > b || b > a;
console.log(`y is :`, y);




//logical NOT ( ! )

console.log(`not true :`, !true);
console.log(`not false :`, !false);


let z = !(a > b); //op should be false but '!' made it true.
console.log(`z is :`, z);

