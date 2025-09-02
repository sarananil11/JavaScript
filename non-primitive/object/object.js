//collection of kery value pairs ( key : value, key : value,..).
//used to store multiple values in a single variable & value can be any data type.

const person = {
    name: `saran`,
    age: 20,
    isStudent: true

};




console.log(person.name);
console.log(person[`age`]);


//add or modify datas
person.age = 25;
person.city = "newyork";
console.log(person.city);
delete person.city;

console.log(person);