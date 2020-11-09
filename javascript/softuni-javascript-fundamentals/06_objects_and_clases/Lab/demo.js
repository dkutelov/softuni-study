// Properties
let oldCat = {
    name: 'Timmy',
    age: 3,
    breed: 'Persian',
};

let newCat = {
    name: 'Garry',
    age: 2,
    breed: 'Angora',
};

let cat = {};
cat.name = 'Nav';
cat['name'] = 'Navcho';
cat.age = 5;
cat.breed = 'Persian';

console.log(cat);

// Methods
function makeCatSound() {
    console.log('Meow');
}

let cat1 = {
    makeSound: makeCatSound,
    makeSound1: function () {
        console.log('Meow 1');
    },
    makeSound2: () => console.log('Meow 2'),
    makeSound3() {
        console.log('Meow 3');
    },
};

console.log(cat1);
cat1.makeSound();
cat1.makeSound1();
cat1.makeSound2();
cat1.makeSound3();

let person = { name: 'Peter', age: 20 };
person.sayHello = () => console.log('Hi, guys');
