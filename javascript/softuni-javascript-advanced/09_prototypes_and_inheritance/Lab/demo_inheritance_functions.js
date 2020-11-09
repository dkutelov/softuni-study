function Person(name, email) {
    this.name = name;
    this.email = email;

    this.getName = function () {
        return name;
    }

    this.setName = function (val) {
        name = val;
        return name;
    }
}

Person.prototype.getAllData = function () {
    return {
        name: this.getName(),
        email: this.email
    }
}

function Teacher(name, email, subject) {
    Person.call(this, name, email); // calls super
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype); // makes extends