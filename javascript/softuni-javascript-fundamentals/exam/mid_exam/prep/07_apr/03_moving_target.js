function solve(input) {
    const targets = input.shift().split(' ').map(Number);

    for (const command of input) {
        if (command === 'End') {
            console.log(`${targets.join('|')}`);
            return;
        }

        let [commandName, index, val] = command.split(' ');
        index = Number(index);
        val = Number(val);

        if (commandName === 'Shoot') {
            if (isIndexValid(index)) {
                if (targets[index] - val <= 0) {
                    targets.splice(index, 1);
                } else {
                    targets[index] -= val;
                }
            }
        } else if (commandName === 'Add') {
            if (!isIndexValid(index)) {
                console.log('Invalid placement!');
                continue;
            }

            targets.splice(index, 0, val);
        } else if (commandName === 'Strike') {
            if (
                isIndexValid(index) &&
                isIndexValid(index - val) &&
                isIndexValid(index + val)
            ) {
                targets.splice(index - val, val * 2 + 1);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }

    function isIndexValid(i) {
        return i >= 0 && i < targets.length;
    }
}

// solve([
//     '52 74 23 44 96 110',
//     'Shoot 5 10',
//     'Shoot 1 80',
//     'Strike 2 1',
//     'Add 22 3',
//     'End',
// ]);

solve([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End',
]);
