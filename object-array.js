const students = [
    { name: `saran`, age: 20, grade: `S+` },
    { name: `sayooj`, age: 20, grade: `E` },
    { name: `arjun`, age: 20, grade: `C` }

];
// accessing data : 

console.log(students[0].name); // saran
console.log(students[1].grade);  // E
console.log(students[2].age);  // 20


// looping through object array.

students.forEach(stdnt => {
    console.log(`${stdnt.name} is ${stdnt.age} years old.`);

});
// forEach executes a function for each array element but does not return a new array. It is used for side effects (like logging or modifying external variables).