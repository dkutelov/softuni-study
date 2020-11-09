function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.speak = function(){
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
};

function creatNew(constructor, ...args) {
    // create new object
    let newObj = {};
    // set prototype
    Object.setPrototypeOf(newObj, constructor.prototype);
    // call the constructor
    constructor.apply(newObj, args);
    // return new object
    return newObj;
}

let person = creatNew(Person, "Dariy", "Kutelov");
let person1 = new Person('Adrian', 'Kutelov');

person.speak();
person1.speak();

// --- inherit person

function Student(firstName, lastName, course) {
    Person.call(this, firstName, lastName); // same as super(firstName, lastName)
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.getGrades = function () {
    console.log('grades');
};

let student = new Student('John', 'Doe', 'JS Advanced');

console.log(student);
console.log(student instanceof Student);
console.log(student instanceof Person);