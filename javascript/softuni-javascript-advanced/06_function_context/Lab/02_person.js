function Person1(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
        set: function(value) {
            const [newFirst, newLast] = value.split(' ');
            if (!newFirst || !newLast) { return;}
            this.firstName = newFirst;
            this.lastName = newLast;
        },
        get: function () {
            return this.firstName + ' ' + this.lastName;
        }
    })
}


class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value) {
        let pattern = /\w+ \w+/;
        if (pattern.test(value)) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}



let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
