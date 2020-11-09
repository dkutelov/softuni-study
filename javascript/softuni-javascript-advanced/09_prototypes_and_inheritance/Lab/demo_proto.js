let student2 = {
    name: 'Petkan',
    hasPen: true,
    write: function() {return `my name is ${this.name}`}
}

let studet1 = {
    name: 'Ivan'
};

Object.setPrototypeOf(studet1, student2); // same as let student2 = Object.create(student1);
console.log(studet1.hasPen);
console.log(studet1.write());

let protoObj = Object.getPrototypeOf(studet1);
console.log(protoObj);
