function solve(input) {
    const numbers = input.split(' ').map(Number);
    const numbersAvg = numbers.reduce((x, s) => s + x, 0) / numbers.length;
    numbers.sort((a, b) => b - a);
    const res = [];

    for (let i = 0; i < 5; i++) {
        if (numbers[i] > numbersAvg) {
            res.push(numbers[i]);
        }

        if (i === numbers.length - 1) {
            break;
        }
    }

    if (res.length > 0) {
        console.log(res.join(' '));
    } else {
        console.log('No');
    }
}

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');
