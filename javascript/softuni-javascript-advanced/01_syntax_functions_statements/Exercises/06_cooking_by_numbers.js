function solve(params) {
    let num = params[0];
    const commands = params.slice(1);

    const commandsMap = {
        chop : x => x / 2,
        dice : x => Math.sqrt(x),
        spice : x => x + 1,
        bake : x => x * 3,
        fillet : x => x * 0.8,
    };

    commands.forEach( command => {
        num = commandsMap[command](num);
        console.log(num);
    })
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])