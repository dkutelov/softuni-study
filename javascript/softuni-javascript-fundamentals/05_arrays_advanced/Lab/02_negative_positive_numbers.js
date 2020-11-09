function solve(numbers) {
    let result = [];

    for (const number of numbers) {
        if (number >= 0) {
            result.push(number);
        } else {
            result.unshift(number);
        }
    }

    console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);
