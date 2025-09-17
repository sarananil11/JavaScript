class Movie {
    constructor(name, color, engine) {
        this.name = name;
        this.color = color;
    }
    motion() {
        console.log(`The movie name is ${this.name} and color is ${this.color}`);

    }
}

class B_and_W extends Movie {
    constructor(name, duration, color) {
        super(name, color);  // super can be defined only once.
        this.duration = duration;
    }
    motion() {
        console.log(`Name of the movie is ${this.name} , duration is ${this.duration} and color is ${this.color}`);

    }

}

const b_and_w = new B_and_W(`Brahmayugam`, `2 hours 17 minutes`, `black and white.`);
b_and_w.motion();