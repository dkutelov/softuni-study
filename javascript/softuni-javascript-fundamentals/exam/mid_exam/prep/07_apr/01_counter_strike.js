function solve(input) {
    let energy = Number(input.shift());
    let winCount = 0;

    for (const command of input) {
        if (command === 'End of battle') {
            console.log(`Won battles: ${winCount}. Energy left: ${energy}`);
            return;
        }

        const distance = Number(command);
        if (energy - distance < 0) {
            console.log(
                `Not enough energy! Game ends with ${winCount} won battles and ${energy} energy`
            );
            return;
        }

        energy -= distance;
        winCount++;

        if (winCount > 0 && winCount % 3 === 0) {
            energy += winCount;
        }
    }
    console.log(`Won battles: ${winCount}. Energy left: ${energy}`);
}

solve(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
//solve(['200', '54', '14', '28', '13', 'End of battle']);
