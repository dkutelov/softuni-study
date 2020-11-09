function solve(arr) {
    arr = arr.map(Number);
    const firstElement = arr[0];
    const lastElement = arr[arr.length-1];
    return firstElement + lastElement;
}

const result = solve(['20','30','40']);
console.log(result);