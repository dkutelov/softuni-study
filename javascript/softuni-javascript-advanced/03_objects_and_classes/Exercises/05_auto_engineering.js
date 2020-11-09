function solve(data) {
    const producedCars = new Map();

    data.forEach((dataRow) => {
        let [brand, model, quantity] = dataRow.split(' | ');
        quantity = Number(quantity);
        addToProducedCars(brand, model, quantity);
    });

    print(producedCars);

    function addToProducedCars(brand, model, quantity) {
        if (!producedCars.has(brand)) {
            producedCars.set(brand, new Map());
        }

        if ( !producedCars.get(brand).has(model)) {
            producedCars.get(brand).set(model, 0);
        }

        producedCars.get(brand).set(model, producedCars.get(brand).get(model) + quantity);
    }

    function print(cars) {
        for (let [brand, models] of cars) {
            console.log(brand);
            for (let [model, quantity] of models) {
                console.log(`###${model} -> ${quantity}`);
            }
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
