function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        command = command.split(' ');
        const commandName = command.shift();
        const params = command.map(Number);
        let index = null;
        let number = null;

        switch (commandName) {
            case 'add':
                index = params[0];
                number = params[1];
                numbers.splice(index, 0, number);
                break;
            case 'addMany':
                index = params.shift();
                numbers.splice(index, 0, ...params);
                break;
            case 'contains':
                number = params[0];
                const numberIndex = numbers.indexOf(number);
                console.log(numberIndex);
                break;
            case 'remove':
                index = params[0];
                numbers.splice(index, 1);
                break;
            case 'shift':
                positions = params[0];
                for (let i = 0; i < positions; i++) {
                    let shifted = numbers.shift();
                    numbers.push(shifted);
                }
                break;
            case 'sumPairs':
                let result = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    if (numbers[i + 1] !== undefined) {
                        result.push(numbers[i] + numbers[i + 1]);
                    } else {
                        result.push(numbers[i]);
                    }
                }
                numbers = result;
                break;
            case 'print':
                console.log(`[ ${numbers.join(', ')} ]`);
            default:
                break;
        }
    }
}

// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );

arrayManipulator([2, 2, 4, 2, 4], ['add 1 4', 'sumPairs', 'print']);
