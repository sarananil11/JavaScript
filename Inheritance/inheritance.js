// One class (class is blueprint for creating object) can inherit properties and methods from another class.


// base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() { // speak is a method
        console.log(`${this.name} makes a sound`);

    }
}


//derived class inherits from animal 
class Dog extends Animal {  // extends is used to inherit from parent.
    constructor(name, breed) {
        super(name); // call the parent class constructor. only defined once.
        this.breed = breed;
    }

    //override speak method (polymorphism) -> ability to take multiple forms.
    speak() {
        console.log(`${this.name}, a ${this.breed} barks`);

    }
}

const dog = new Dog(`Rex`, `Germen Sheperd`);
dog.speak();