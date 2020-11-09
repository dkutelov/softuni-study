function solve(input) {
    let products = [];
    input.forEach( el => {
        let [town, product, price] = el.split('|').map(x => x.trim());
        price = Number(price);

        let currentProduct = products.find(x => x.product === product);

        if (!currentProduct) {
            products.push({
                product,
                offers: [{
                    town,
                    price
                }]
            });
            return;
        }

        const currentTown  = currentProduct.offers.find(x => x.town === town);

        if (!currentTown) {
            currentProduct.offers.push({
                town,
                price
            });
            return;
        }
        currentTown.price = price;
    });

    products.forEach( el => {
        const sortedTowns = el.offers.sort((a,b) => a.price - b.price);
        const lowestOffer = sortedTowns[0];
        console.log(`${el.product} -> ${lowestOffer.price} (${lowestOffer.town})`);
    })
}

function solve1(input) {
    let products = [];
    input.forEach( el => {
        let [town, product, price] = el.split('|').map(x => x.trim());
        price = Number(price);

        const currentProduct = products.find( x => Object.keys(x).includes(product));

        if (!currentProduct) {
            products.push({ [product]: [{ [town]: price}] });
            return;
        }

        const currentTown  = currentProduct[product].find(x => Object.keys(x).includes(town));

        if (!currentTown) {
            currentProduct[product].push({ [town]: price });
            return;
        }
        currentTown[town] = price;
    });

    products.forEach( product => {
        const productName = Object.keys(product)[0];
        const sortedTowns = product[productName].sort((a,b) => Object.values(a)[0] - Object.values(b)[0]);
        const lowestOffer = sortedTowns[0];
        console.log(`${productName} -> ${Object.values(lowestOffer)[0]} (${Object.keys(lowestOffer)[0]})`);
    })
}


solve1(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);