function solve(input) {
    const maxCars = Number(input.shift());
    const myCars = {};

    for (let i = 0; i < maxCars; i++) {
        const currentCar = input.shift();
        let [model, mileage, fuel] = currentCar.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        myCars[`${model}`] = { mileage, fuel };
    }

    const commands = input;

    for (const commandLine of commands) {
        if (commandLine === 'Stop') {
            const soretedCars = Object.entries(myCars).sort((a, b) => {
                if (b[1].mileage < a[1].mileage) {
                    return -1;
                } else if (b[1].mileage > a[1].mileage) {
                    return 1;
                } else {
                    return a[0].localeCompare(b[0]);
                }
            });
            soretedCars.forEach((car) => {
                console.log(
                    `${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`
                );
            });
            break;
        }

        let [commandName, model, firstAgr, secondArg] = commandLine.split(
            ' : '
        );

        switch (commandName) {
            case 'Drive':
                let distance = Number(firstAgr);
                let neededFuel = Number(secondArg);

                if (myCars[model].fuel < neededFuel) {
                    console.log('Not enough fuel to make that ride');
                    continue;
                }

                myCars[model].mileage += distance;
                myCars[model].fuel -= neededFuel;

                console.log(
                    `${model} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
                );

                if (myCars[model].mileage >= 100000) {
                    delete myCars[model];
                    console.log(`Time to sell the ${model}!`);
                }
                break;
            case 'Refuel':
                let refillFuel = Number(firstAgr);
                let newFuel = myCars[model].fuel + refillFuel;
                if (newFuel > 75) {
                    newFuel = 75;
                    refillFuel = 75 - myCars[model].fuel;
                }
                myCars[model].fuel = newFuel;
                console.log(`${model} refueled with ${refillFuel} liters`);
                break;
            case 'Revert':
                const kilometers = Number(firstAgr);
                const currentMillage = myCars[model]['mileage'];

                if (currentMillage - kilometers < 10000) {
                    myCars[model]['mileage'] = 10000;
                    continue;
                }

                myCars[model]['mileage'] -= kilometers;
                console.log(
                    `${model} mileage decreased by ${kilometers} kilometers`
                );
                break;
        }
    }
}

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop',
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop',
]);
