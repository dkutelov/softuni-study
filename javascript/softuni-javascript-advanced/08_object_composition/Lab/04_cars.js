function solve(tokens) {
    const funcMap = {
        create: (acc, name, _, inheritName) => {
            if (!inheritName) {
                acc[name] = {};
                return acc;
            }
            const parent = acc[inheritName];
            acc[name] = Object.create(parent);
            return acc;
        },
        set: (acc, name, propName, propValue) => {
            acc[name][propName] = propValue;
            return acc;
        },
        print: (acc, name) => {
            const currentObj = acc[name];
            let result = [];
            for (let k in currentObj) {
                result.push(`${k}:${currentObj[k]}`);
            }
            console.log(result.join(', '));
            return acc;
        }
    };

    return tokens.reduce((acc, command) => {
        const [operation, name, v1, v2] = command.split(' ');
        return funcMap[operation](acc, name,v1,v2);
    },{});
}

const res = solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);
