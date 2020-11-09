function Person(first, last, age, eye) {
    // private
    let sex = 'male';

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };

    function add(n1, n2) { return n1 + n2};

    this.returnSum = function(a,b) {return add(a,b)};
}

const person = new Person('Dari', 'Kutelov', 51, 'blue');
console.log(person.fullName());
console.log(person.returnSum(1,2));
console.log(person.eyeColor);


