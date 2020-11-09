class Person {
    canFly = false;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}.`)
    }
}

class Programmer extends Person {
    constructor(name, age) {
        super(name, age);
    }

    coding() {
        console.log(`Hello, world! My name is ${this.name}.`);
        console.log(`I ${this.canFly ? 'can' : 'can not'} fly!`);
    }
}

let peter = new Programmer('Peter', 12);
peter.coding();
peter.speak();