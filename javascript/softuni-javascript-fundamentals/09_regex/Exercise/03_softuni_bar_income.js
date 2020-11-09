function solve(inputLines) {
    let totalIncome = 0;
    for (const inputLine of inputLines) {
        if (inputLine === 'end of shift') {
            console.log(`Total income: ${totalIncome.toFixed(2)}`);
            break;
        }

        const pattern = /%[^a-z]*(?<name>[A-Z][a-z]+)[^a-z]*%[^\.%|$]*<[/W]*(?<product>\w+)[\W]*>[^\.%|$]*\|\D*(?<quantity>\d+)\D*\|\D*(?<price>\d+(\.\d+)?)\D*\$/g;
        const currentData = pattern.exec(inputLine);
        if (currentData) {
            let customerName = currentData.groups['name'];
            let product = currentData.groups['product'];
            let quantity = currentData.groups['quantity'];
            let price = currentData.groups['price'];
            let totalPrice = quantity * price;
            totalIncome += totalPrice;
            console.log(
                `${customerName}: ${product} - ${totalPrice.toFixed(2)}`
            );
        }
    }
}

// solve([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift',
// ]);

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift',
]);
