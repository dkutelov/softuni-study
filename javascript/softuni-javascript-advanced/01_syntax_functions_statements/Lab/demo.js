// let sum = function (a, b) {
//     return a + b;
// };
//
// const sum1 = (a, b) => a + b;
//
// let result = sum(5, 10);
//
// function calculate(operation, a, b) {
//     return operation(a, b);
// }
//
// const res = calculate(sum, 5, 10);
// console.log(res);


function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function(array) {
    array.forEach((entry) => {
        this.sum += entry;
        ++this.count;
    }, this)
    // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
// 3
console.log(obj.sum);
// 16