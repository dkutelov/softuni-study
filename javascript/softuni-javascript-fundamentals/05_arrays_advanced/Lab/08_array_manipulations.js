function arrayManipulation(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    const commands = arr.slice();

    for (const command of commands) {
        numbers = runCommand(command, numbers);
    }

    console.log(numbers.join(' '));

    function runCommand(command) {
        command = command.split(' ');
        const commandName = command.shift();
        let num = Number(command.shift());
        let index = null;

        switch (commandName) {
            case 'Add':
                numbers.push(num);
                break;
            case 'Remove':
                numbers = numbers.filter((number) => number !== num);
                break;
            case 'RemoveAt':
                index = num;
                numbers.splice(index, 1);
                break;
            case 'Insert':
                index = Number(command.shift());
                numbers.splice(index, 0, num);
                break;
        }

        return numbers;
    }
}

arrayManipulation([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3',
]);
