//fills all or part of an element with a static value.

let n = [1, 2, 3, 4, 5];
console.log(n);
n.fill(0, 1, 4);  //here , 0 is the filling element. 1 and 4 are start to end position. but the 4 is excluded.
console.log(n);


//my example
let med = [`tablet`, `eveon`, `dolo`, `paracetamol`, `insuline`, `daltis`];
med.fill(`medicine`, 1, 4);
console.log(`medicines are: ${med}`);
