function solve(input) {
    const numberedInput = input.map(Number);

    let people = numberedInput.pop();
    const capacityPerEmployee = numberedInput;
    const capacityPerHour = capacityPerEmployee.reduce((a, b) => a + b, 0);

    let hours = 0;

    while (people > 0) {
        hours++;
        if (hours % 4 === 0) {
            continue;
        }
        people -= capacityPerHour;
    }

    console.log(`Time needed: ${hours}h.`);
}

solve([5, 6, 4, 20]);
solve(['1', '2', '3', '45']);
solve([3, 2, 5, 40]);
