function solve(juicesData) {
    const juicesQuantity = {};
    const juicesBottles = [];

    juicesData.forEach((juicesDataLine) => {
        let [juiceName, quantity] = juicesDataLine.split(' => ');
        quantity = Number(quantity);

        if (!juicesQuantity[juiceName]) {
            juicesQuantity[juiceName] = 0;
        }

        juicesQuantity[juiceName] += quantity;

        if (juicesQuantity[juiceName] >= 1000) {
            const newBottles = parseInt(juicesQuantity[juiceName] / 1000);
            //
            const currentJuice = juicesBottles.find(
                (juice) => juice.name === juiceName
            );

            if (currentJuice) {
                currentJuice.bottles += newBottles;
            } else {
                juicesBottles.push({
                    name: juiceName,
                    bottles: newBottles,
                });
            }

            juicesQuantity[juiceName] %= 1000;
        }
    });

    juicesBottles.forEach((juice) =>
        console.log(`${juice.name} => ${juice.bottles}`)
    );
}

// solve([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549',
// ]);

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
]);
