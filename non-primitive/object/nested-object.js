const me = {
    name: `Saran Anil V P`,
    age: 20,
    address: {
        house: `alankar`,
        dob: `27-September-2004`,
        pin: 673611,
        landmark: `Bus stop`
    },
    email: ` sarananilvp2020@gmail.com`


};
console.log(me);


// 'this' keyword.  used to call properties and methods (key and value)

const person = {

    name: `Saran Anil V P`,
    email: `sarananilvp2020@gmail.com`,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }


};
person.greet(); // calling the function 'greet'.
