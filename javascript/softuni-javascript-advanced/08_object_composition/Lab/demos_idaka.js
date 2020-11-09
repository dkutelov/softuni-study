// function composition
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, currentFunc) => currentFunc(acc), x);
    }
}

// toString for object
a = {
    someProp: 'hi',
    toString() {
        return JSON.stringify(this);
    }
};

console.log(a.toString()); //{"someProp":"hi"}
console.log(a.valueOf()); // { someProp: 'hi', toString: [Function: toString] }


const personPrototype = {
    name: 'anonymous',
    getName() {
        return this.name;
    }
};

const obj = Object.create(personPrototype);
console.log(obj); // {}
console.log(obj.name); // anonymous
obj.name = 'John';
console.log(obj.getName()); //John

