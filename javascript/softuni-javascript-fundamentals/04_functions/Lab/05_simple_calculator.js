function simpleCalculator(firstNumber, secondNumber, operator) {
    let opetation = null;
    switch (operator) {
        case 'multiply':
            opetation = (a, b) => a * b;
            break;
        case 'divide':
            opetation = (a, b) => a / b;
            break;
        case 'add':
            opetation = (a, b) => a + b;
            break;
        case 'subtract':
            opetation = (a, b) => a - b;
            break;
        default:
            break;
    }
    console.log(opetation(firstNumber, secondNumber));
}

console.log(simpleCalculator(12, 19, 'add'));
