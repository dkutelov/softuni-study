function solve(input) {
    let targets = input.shift().split('|').map(Number);
    const fieldLength = targets.length;
    const commands = input;
    let score = 0;

    for (const command of commands) {
        if (command === 'Game over') {
            console.log(targets.join(' - '));
            console.log(
                `Iskren finished the archery tournament with ${score} points!`
            );
            break;
        }

        const tokens = command.split('@');
        const commandName = tokens[0];

        if (commandName.includes('Shoot')) {
            const startIndex = Number(tokens[1]);
            const len = Number(tokens[2]);

            if (!isIndexValid(startIndex, fieldLength)) {
                continue;
            }

            let targetIndex = null;

            if (
                (commandName === 'Shoot Left' && len >= 0) ||
                (commandName === 'Shoot Right' && len < 0)
            ) {
                targetIndex = fieldLength + ((startIndex - len) % fieldLength);
                //targetIndex = startIndex - len;
                // if (targetIndex < 0) {
                //     while (targetIndex < 0) {
                //         targetIndex += fieldLength;
                //     }
                // }
            } else if (
                (commandName === 'Shoot Right' && len >= 0) ||
                (commandName === 'Shoot Left' && len < 0)
            ) {
                targetIndex = (startIndex + len) % fieldLength;
                // targetIndex = startIndex + len;
                // if (targetIndex >= fieldLength) {
                //     while (targetIndex >= fieldLength) {
                //         targetIndex -= fieldLength;
                //     }
                // }
            }

            if (targets[targetIndex] >= 5) {
                targets[targetIndex] -= 5;
                score += 5;
            } else {
                score += 5;
                targets[targetIndex] = 0;
            }
        } else if (commandName === 'Reverse') {
            targets.reverse();
        }
    }

    function isIndexValid(i, maxI) {
        return i >= 0 && i < maxI;
    }
}

const tokens = [
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
];

const tokens1 = [
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
];

solve(tokens);

function solve(input) {
    let targets = input.shift().split('|').map(Number);
    const fieldLength = targets.length;
    const commands = input;
    let score = 0;

    for (const command of commands) {
        if (command === 'Game over') {
            console.log(targets.join(' - '));
            console.log(
                `Iskren finished the archery tournament with ${score} points!`
            );
            return;
        }

        const tokens = command.split('@');
        const commandName = tokens[0];
        if (commandName.includes('Shoot')) {
            const startIndex = Number(tokens[1]);
            const len = Number(tokens[2]);

            if (!isIndexValid(startIndex, fieldLength)) {
                continue;
            }

            let targetIndex = null;

            if (
                (commandName === 'Shoot Left' && len >= 0) ||
                (commandName === 'Shoot Right' && len < 0)
            ) {
                targetIndex = fieldLength + ((startIndex - len) % fieldLength);
            } else if (
                (commandName === 'Shoot Right' && len >= 0) ||
                (commandName === 'Shoot Left' && len < 0)
            ) {
                targetIndex = (startIndex + len) % fieldLength;
            }

            const currentTarget = targets[targetIndex];
            if (currentTarget < 5) {
                targets[targetIndex] = 0;
                score += currentTarget;
            } else {
                targets[targetIndex] -= 5;
                score += 5;
            }
        } else if (commandName === 'Reverse') {
            targets.reverse();
        }
    }

    function isIndexValid(i, maxI) {
        return i >= 0 && i < maxI;
    }
}
