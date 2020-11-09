function solve() {
    const [generateButton, buyButton] = document.querySelectorAll('button');
    const [inputTextarea, outputTextarea] = document.querySelectorAll(
        'textarea'
    );

    generateButton.addEventListener('click', generateHandler);
    buyButton.addEventListener('click', buyHandler);

    function generateHandler() {
        const rawData = inputTextarea.value;

        if (rawData) {
            JSON.parse(rawData).forEach((product) => appendProduct(product));
        }
    }

    function appendProduct(product) {
        let productHTML = `<td><img src=${product.img}></td>`;
        productHTML += `<td><p>${product.name}</p></td>`;
        productHTML += `<td><p>${product.price}</p></td>`;
        productHTML += `<td><p>${product.decFactor}</p></td>`;
        productHTML += `<td><input type="checkbox"></td>`;
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = productHTML;
        const tableBody = document.querySelector('.table tbody');
        tableBody.appendChild(tableRow);
    }

    function buyHandler() {
        const tableRows = Array.from(
            document.querySelectorAll('.table tbody tr')
        );
        let boughtProducts = [];

        tableRows.forEach((row) => {
            const checked = row.querySelector('td input').checked;
            if (checked) {
                const productDataElements = row.querySelectorAll('p');
                let productObj = {};
                productObj.name = productDataElements[0].textContent;
                productObj.price = Number(productDataElements[1].textContent);
                productObj.decFactor = Number(
                    productDataElements[2].textContent
                );
                boughtProducts.push(productObj);
            }
        });

        if (boughtProducts.length > 0) {
            outputTextarea.value = getOutputMessage(boughtProducts);
        }
    }

    function getOutputMessage(boughtProducts) {
        const productNames = boughtProducts.map((x) => x.name);
        const price = boughtProducts.reduce((acc, x) => acc + x.price, 0);
        const averageDecFactor =
            boughtProducts.reduce((acc, x) => acc + x.decFactor, 0) /
            boughtProducts.length;
        return `Bought furniture: ${productNames.join(
            ', '
        )}\nTotal price: ${price.toFixed(
            2
        )}\nAverage decoration factor: ${averageDecFactor}`;
    }
}
