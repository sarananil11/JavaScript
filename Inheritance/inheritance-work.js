class Vehicle {
    constructor(name, model, engine) {
        this.name = name;
        this.model = model;
        this.engine = engine;


    }
    travels() {
        console.log(`${this.name} is the name of the car, ${this.model} is the color.`);

    }
}

class Nissan extends Vehicle {
    constructor(name, color, engine) {
        super(name, color, engine);
        this.color = color;

    }
    travels() {
        console.log(`Car name is ${this.name} and car color is ${this.color} with ${this.engine} engine.`);

    }
}

class Truck extends Vehicle {
    constructor(name, engine, tyre) {
        super(name, engine);
        this.tyre = tyre;
        this.engine = engine;

    }
    travels() {
        console.log(`Truck name is ${this.name} , engine is ${this.engine} with ${this.tyre} tyres.`);

    }
}

const nissan = new Nissan(`Skyline R-34`, `Deep-Blue`, `V6-Turbo`);
nissan.travels();

const truck = new Truck(`SUV`, `Truck turbo`, `Big`)
truck.travels();
