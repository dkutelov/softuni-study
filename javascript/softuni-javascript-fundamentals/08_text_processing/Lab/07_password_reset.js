function solve(input) {
    let text = input.shift();
    const commands = input;

    for (const command of commands) {
        if (command === 'Done') {
            console.log(`Your password is: ${text}`);
            break;
        }

        if (command === 'TakeOdd') {
            text = printOdd(text);
        } else if (command.includes('Cut')) {
            text = cutString(command, text);
        } else if (command.includes('Substitute')) {
            text = replaceString(command, text);
        }
    }

    function printOdd(text) {
        let result = '';

        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 1) {
                result += text[i];
            }
        }
        console.log(result);
        return result;
    }

    function cutString(command, text) {
        const [commandName, startIndex, count] = command.split(' ');
        const cutString = text.substr(startIndex, count);
        text = text.replace(cutString, '');
        console.log(text);
        return text;
    }

    function replaceString(command, text) {
        const [cmdName, substring, substitute] = command.split(' ');
        if (text.indexOf(substring) === -1) {
            console.log('Nothing to replace!');
            return text;
        }

        while (text.indexOf(substring) > -1) {
            text = text.replace(substring, substitute);
        }
        console.log(text);
        return text;
    }
}

// solve([
//     'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
//     'TakeOdd',
//     'Cut 15 3',
//     '`Substitute` :: -',
//     'Substitute | ^',
//     'Done',
// ]);

solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done',
]);
