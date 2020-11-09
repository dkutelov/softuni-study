function performOperations(arr) {
    let operands = [];
    const operators = '+-*/';

    for (const element of arr) {
        if (operators.includes(element)) {
            if (operands.length >= 2) {
                const currentOperands = operands.splice(operands.length - 2);
                const operationResult = executeOperation(
                    currentOperands,
                    element
                );
                operands.push(operationResult);
            } else {
                operands = [];
                break;
            }
        } else {
            operands.push(Number(element));
        }
    }

    if (operands.length === 1) {
        console.log(operands[0]);
    } else if (operands.length === 0) {
        console.log('Error: not enough operands!');
    } else {
        console.log('Error: too many operands!');
    }

    function executeOperation(operands, operator) {
        const [n1, n2] = operands;
        let result = null;
        switch (operator) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '/':
                if (n2 !== 0) {
                    result = n1 / n2;
                }
                break;
            case '*':
                result = n1 * n2;
                break;
        }
        return result;
    }
}

performOperations([3, 4, '+']);
performOperations([5, 3, 4, '*', '-']);
performOperations([7, 33, 8, '-']);
performOperations([15, '/']);
