let person = {
    name: "John",
    age: 51
};

Object.defineProperty(person, 'age', {enumerable:false});
Object.defineProperty(person, 'phone', {enumerable:false, value: '0896 988 688', writable: false});

for (let key in person) {
    console.log(key); // name
}

console.log(person.propertyIsEnumerable('age')); // false
console.log(person); //{ name: 'John' }
console.log(person.phone); //0896 988 688
person.phone = '007';
console.log(person.phone); //0896 988 688

