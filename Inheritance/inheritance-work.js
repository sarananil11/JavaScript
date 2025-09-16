class Vehicle {
    constructor(name, model) {
        this.name = name;
        this.model = model;

    }
    travels() {
        console.log(`${this.name} is the name of the car, ${this.model} is the color.`);

    }
}

class Nissan extends Vehicle {
    constructor(name, color) {
        super(name, color);
        this.color = color;

    }
    travels() {
        console.log(`Car name is ${this.name} and car color is ${this.color}`);

    }
}

const nissan = new Nissan(`Skyline`, `Blue`);
nissan.travels();