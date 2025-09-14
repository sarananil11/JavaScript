// you can store function inside an object.These are called methods.


const car = {
    brand: `toyota`,
    start: function () {  //function inside an object
        console.log(`Car Started`);

    }
};

car.start();  //calling function




// my example

let laptop = {
    brand: `dell`,
    model: function model() {
        console.log(`Dell Inspiron `);

    }
};
laptop.model();