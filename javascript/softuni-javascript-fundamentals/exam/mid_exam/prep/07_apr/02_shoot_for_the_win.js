function solve(input) {
    let targets = input.shift().split(' ').map(Number);
    const shotTargets = [];

    for (const command of input) {
        if (command === 'End') {
            console.log(
                `Shot targets: ${shotTargets.length} -> ${targets.join(' ')}`
            );
            return;
        }

        const index = Number(command);

        if (
            index >= 0 &&
            index < targets.length &&
            !shotTargets.includes(index)
        ) {
            const currentValue = targets[index];
            targets[index] = -1;
            shotTargets.push(index);

            targets = targets.map((element, idx) => {
                if (shotTargets.includes(idx)) {
                    return element;
                } else if (element > currentValue) {
                    return element - currentValue;
                } else if (element <= currentValue) {
                    return element + currentValue;
                }
            });
        }
    }
}

solve(['24 50 36 70', '0', '4', '3', '1', 'End']);
solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);
