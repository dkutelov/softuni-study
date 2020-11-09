function solve(productsData) {
    let products = [];

    for (const product of productsData) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)\b/gm;
        if (product === 'Purchase') {
            console.log('Bought furniture:');
            products.forEach((product) => console.log(product.name));
            const total = products.reduce(
                (preVal, currentProduct) =>
                    (preVal += currentProduct.price * currentProduct.quantity),
                0
            );
            console.log(`Total money spend: ${total.toFixed(2)}`);
            break;
        }

        const currentProduct = pattern.exec(product);
        if (currentProduct) {
            let name = currentProduct.groups['name'];
            let price = parseFloat(currentProduct.groups['price']);
            let quantity = parseInt(currentProduct.groups['quantity']);
            products.push({ name, price, quantity });
        }
    }
}

solve(['>>Sofa<<312.23!3', '>>TV<<300,0!5', '>Invalid<<!5', 'Purchase']);
