function solve(arr) {
    const smallest = Math.min(...arr);
    const i = arr.indexOf(smallest);
    arr.splice(i, 1);
    const secondSmallest = Math.min(...arr);
    console.log([smallest, secondSmallest].join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);