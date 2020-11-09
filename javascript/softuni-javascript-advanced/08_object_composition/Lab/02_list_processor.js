function solve(data) {
    let elements = [];

    const funcObj = {
        add: (newValue) => [...elements, newValue],
        print: () => {
            console.log(elements.join(','));
            return elements
        },
        remove: (valueToRemove) => elements.filter(el => el !== valueToRemove)
    };

    data
        .map( x => x.split(' '))
        .forEach(([operation, argument]) => {
        if (funcObj.hasOwnProperty(operation)) {
            elements = funcObj[operation](argument);
        }
    })
}

function solution(commands) {
    return commands.reduce((acc, currentCommand) => {
        const [operation, ...others] = currentCommand.split(' ');
        const word = others[0];
        if (operation === 'add') {
            return acc.concat(word);
        } else if (operation === 'remove') {
            return acc.filter(i => i !== word)
        }
        console.log(acc.join(','));
        return acc;
    }, []);
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);