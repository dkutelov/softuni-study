function solve(input) {
    let numbers = input.shift().split(' ').map(Number);

    for (let command of input) {
        if (command === 'end') {
            console.log(numbers.join(', '));
            break;
        }

        command = command.split(' ');
        const commandName = command[0];
        let index1,
            index2 = null;

        if (command.length > 1) {
            index1 = Number(command[1]);
            index2 = Number(command[2]);
        }

        if (commandName === 'swap') {
            if (isValid(index1) && isValid(index2)) {
                const currentElement = numbers[index2];
                numbers[index2] = numbers[index1];
                numbers[index1] = currentElement;
            }
        } else if (commandName === 'multiply') {
            if (isValid(index1) && isValid(index2)) {
                numbers[index1] *= numbers[index2];
            }
        } else if (commandName === 'decrease') {
            for (let i = 0; i < numbers.length; i++) {
                numbers[i]--;
            }
        }
    }

    function isValid(index) {
        return index >= 0 && index < numbers.length;
    }
}

// solve([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end',
// ]);

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end',
]);
