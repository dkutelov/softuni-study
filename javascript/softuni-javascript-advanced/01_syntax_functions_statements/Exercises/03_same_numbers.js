function solve(num) {
    let prevChar = num % 10;
    let sum = 0
    let isSame = true
    while (num > 0) {
        const currentDigit = num % 10;
        if (currentDigit !== prevChar) {
            isSame = false;
        }
        sum += currentDigit
        num = parseInt(num / 10);
    }

    console.log(`${isSame}\n${sum}`);
}

solve(2222222);
solve(1234);