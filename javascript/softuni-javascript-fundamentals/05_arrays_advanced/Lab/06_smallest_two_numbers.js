function solve(arr) {
    return arr
        .sort((a, b) => a - b)
        .splice(0, 2)
        .join(' ');
}

const res = solve([30, 15, 50, 5]);
console.log(res);
