function solve(params) {
    let parking = new Map();

    params.forEach((car) => {
        const [direction, plateNumber] = car.split(', ');
        if (direction === 'IN') {
            parking.set(plateNumber, direction);
        } else if (direction === 'OUT') {
            parking.delete(plateNumber);
        }
    });

    const carsInParking = Array.from(parking.keys()).sort((a, b) =>
        a.localeCompare(b)
    );
    console.log(carsInParking.join('\n'));
}

function solveObj(params) {
    let parking = {};

    params.forEach((car) => {
        const [direction, plateNumber] = car.split(', ');
        if (direction === 'IN') {
            parking[plateNumber] = 'IN';
        } else if (direction === 'OUT') {
            delete parking[plateNumber];
        }
    });

    const carsInParking = Object.keys(parking).sort((a, b) =>
        a.localeCompare(b)
    );
    console.log(carsInParking.join('\n'));
}

solveObj([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
]);
