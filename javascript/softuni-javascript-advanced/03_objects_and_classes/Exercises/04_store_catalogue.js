function solve(productsData) {
    const catalogue = {};

    productsData.forEach((productsDataLine) => {
        let [name, price] = productsDataLine.split(' : ');
        price = Number(price);

        const letter = name[0];

        if (!catalogue[letter]) {
            catalogue[letter] = {};
        }

        catalogue[letter][name] = price;
    });

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    sortedCatalogue = sortedCatalogue.map((letterData) => [
        letterData[0],
        Object.entries(letterData[1]).sort((a, b) => a[0].localeCompare(b[0])),
    ]);

    sortedCatalogue.forEach((row) => {
        const [letter, products] = row;
        console.log(letter);
        products.forEach((product) => {
            const [name, price] = product;
            console.log(`  ${name}: ${price}`);
        });
    });
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);

solve([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10',
]);
