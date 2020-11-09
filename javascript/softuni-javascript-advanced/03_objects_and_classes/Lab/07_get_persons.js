function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    const  persons = [
        ['Anna', 'Simpson',  22, 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel','Peterson', 24, 'g.p@gmail.com']
    ];
    return  persons.map( person => new Person(...person));
}

const res = solve();
console.log(res);