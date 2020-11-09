function solve(arr) {
    const num = arr.shift();
    console.log(arr.slice(0, num).join(' '));
    const endIndex = arr.length;
    console.log(arr.slice(endIndex - num, endIndex).join(' '));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
