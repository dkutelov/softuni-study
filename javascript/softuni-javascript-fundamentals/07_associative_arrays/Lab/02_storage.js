function createProductList(input) {
    const productList = new Map();

    input.forEach((productDetails) => {
        let [productName, productQuantity] = productDetails.split(' ');

        if (!productList.has(productName)) {
            productList.set(productName, 0);
        }

        const updatedQuantity =
            productList.get(productName) + Number(productQuantity);
        productList.set(productName, updatedQuantity);
    });

    for (const [productName, productQuantity] of productList.entries()) {
        console.log(`${productName} -> ${productQuantity}`);
    }
}

createProductList(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
