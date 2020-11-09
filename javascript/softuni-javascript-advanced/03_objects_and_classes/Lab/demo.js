const id = '24234234';

const person = {
    firstName: 'John',
    lastName: 'Doe',
    returnThis() {
        return this;
    },
    print(){
        console.log(this.firstName);
    }
};

const people = {
    [id]: {
        ...person
    }
};


const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    returnThis() {
        function secondThis() {
            console.log(this);
        }
        secondThis();
        return this;
    },
};

//console.log(person1.returnThis());
//console.log(people);

person.print();