"use strict"
// aka ifelse-ifelse


const prompt = require(`prompt-sync`)();  //require is used to import the prompt option

let mark = prompt(`enter your mark: `);
if (mark >= 90) {
    console.log(`A grade`);

}
else if (mark >= 80) {
    console.log(`B grade`);

}
else if (mark >= 70) {
    console.log(`B grade`);

}
else if (mark >= 60) {
    console.log(`C grade`);

}
else if (mark >= 50) {
    console.log(`C grade`);

}
else if (mark >= 40) {
    console.log(`D grade`);

}
else {
    console.log('need re-test');

}


/*
const prompt = require(`prompt-sync`)();

let age = prompt(`enter the age:`);
if (age == 18) {
    console.log('age is correct');
    
}
else if ( age > 18){
    console.log('major');
    
}
else if ( age <=10){
    console.log('you need parent');
    
}
else {
    console.log('minor');
    
}
    */