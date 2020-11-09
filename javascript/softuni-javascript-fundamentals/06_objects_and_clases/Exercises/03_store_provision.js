function calcProductStock(currentStock, incomingStock) {
    let productStock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        productStock[currentStock[i]] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < incomingStock.length; i += 2) {
        const currentProduct = incomingStock[i];
        if (productStock[currentProduct] === undefined) {
            productStock[currentProduct] = 0;
        }
        productStock[incomingStock[i]] += Number(incomingStock[i + 1]);
    }

    for (const product in productStock) {
        if (productStock.hasOwnProperty(product)) {
            console.log(`${product} -> ${productStock[product]}`);
        }
    }
}

calcProductStock(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30',
    ]
);
