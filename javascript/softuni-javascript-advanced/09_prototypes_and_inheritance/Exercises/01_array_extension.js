(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function (n) {
        return this.reduce((acc, x) => acc + x, 0);
    };

    Array.prototype.average = function (n) {
        return this.sum() / this.length;
    };
}());

let myArr = [1, 2, 3, 4, 5];
console.log(myArr.average());