function solve(firstNumber, secondNumber, operation) {
    let result;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
    }
    console.log(result);
}

solve(5, 19, '+');
