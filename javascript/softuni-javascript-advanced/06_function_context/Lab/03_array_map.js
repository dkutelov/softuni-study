function arrayMap(arr, fn) {
    return arr.reduce( (acc, x) => acc.concat(fn(x)), [])
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

// just playing around
function mapArray(fn) {
    return this.reduce( (acc, x) => acc.concat(fn(x)), []);
}

Array.prototype.mapArray = mapArray;
const result = nums.mapArray((item)=> item * 2);
console.log(result);