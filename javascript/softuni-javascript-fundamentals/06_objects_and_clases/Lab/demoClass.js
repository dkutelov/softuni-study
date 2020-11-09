class Cat {
    speeces = 'cats';
    constructor(name = 'Anonymous', breed = 'NA') {
        this.name = name;
        this.breed = breed;
        this.makeSound = function () {
            console.log('Make Meow');
        };
    }

    makeCatSound() {
        console.log(`${this.name} makes as Meow as method`);
    }
}

let firstCat = new Cat('Navcho', 'Persian');
let secondCat = new Cat();

console.log(firstCat);
console.log(secondCat);
