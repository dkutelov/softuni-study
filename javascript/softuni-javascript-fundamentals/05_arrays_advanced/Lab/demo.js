let names = ['Peter', 'George', 'Steven'];

names.push('Eva');

console.log(names);

Array.prototype.iPush = function (element) {
    this[this.length] = element;
};

function myPush(arr, element) {
    arr[arr.length] = element; // in Python IndexError
}

myPush(names, 'Micke');

console.log(names);

names.iPush('Jeffrey');

console.log(names);

// -------

let numbers = [10, 20, 30, 40];

console.log(numbers);

const lastNumber = numbers.pop();

console.log(lastNumber);

Array.prototype.myPOP = function () {
    const lastElement = this[this.length - 1];
    this.length--;
    return lastElement;
};

const myLastElement = numbers.myPOP();
console.log(numbers);
console.log(myLastElement);
