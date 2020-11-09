function train(args) {
    let wagons = args[0].split(' ').map(Number);
    const maxPassangers = Number(args[1]);

    const fitPassangersToWagon = (newPassangers, wagons) => {
        return [
            ...wagons.map((currentPassangers) => {
                if (
                    maxPassangers - currentPassangers >= newPassangers &&
                    newPassangers > 0
                ) {
                    currentPassangers += newPassangers;
                    newPassangers = 0;
                }
                return currentPassangers;
            }),
        ];
    };

    const executeCommands = (commands, wagons) => {
        for (let command of commands) {
            command = command.split(' ');
            let newPassangers = Number(command.pop());

            if (command.length > 0) {
                wagons.push(newPassangers);
                continue;
            }

            wagons = fitPassangersToWagon(newPassangers, wagons);
        }

        return wagons;
    };

    commands = args.slice(2);

    wagons = executeCommands(commands, wagons);
    console.log(wagons.join(' '));
}

train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
