function foo(commands) {
    let result = [];
    const funcMap = {
        'add': function(n, arr) {
            return arr.concat(n);
        },
        'remove': function (_, arr) {
            return arr.slice(0, -1);
        }
    };

    commands.forEach( (command, index) => {
        result = funcMap[command](index+1, result);
    });

    result.length ? console.log(result.join('\n')) : console.log('Empty');
}

foo(	['add',
    'add',
    'add',
    'add']
);