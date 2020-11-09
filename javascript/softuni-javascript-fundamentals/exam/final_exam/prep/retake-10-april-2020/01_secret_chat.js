function solve(input) {
    let message = input.shift();

    for (const line of input) {
        if (line === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }

        const tokens = line.split(':|:');
        const [command, firstArg, secondArg] = tokens;

        switch (command) {
            case 'InsertSpace':
                const idx = Number(firstArg);
                message = message
                    .substring(0, idx)
                    .concat(' ')
                    .concat(message.substring(idx));
                break;
            case 'Reverse':
                const subStr = firstArg;
                if (!message.includes(subStr)) {
                    console.log('error');
                    continue;
                }
                message = message.replace(subStr, '');
                reversedStr = subStr.split('').reverse().join('');
                message = message.concat(reversedStr);
                break;
            case 'ChangeAll':
                const changeStr = firstArg;
                const replaceStr = secondArg;
                while (message.includes(changeStr)) {
                    message = message.replace(changeStr, replaceStr);
                }
        }
        console.log(message);
    }
}

// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal',
// ]);

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal',
]);
