function oddNumbers(arr) {
    return arr
        .filter((el, i) => i % 2 === 1)
        .map((number) => number * 2)
        .reverse()
        .join(' ');
}

const res = oddNumbers([3, 0, 10, 4, 7, 3]);
console.log(res);
