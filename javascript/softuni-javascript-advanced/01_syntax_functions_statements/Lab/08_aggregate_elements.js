function solve(elements) {
    let sum = 0;
    let sum1 = 0;
    let sumConcat = '';
    elements.forEach((element) => {
        sum += element;
        sum1 += 1 / element;
        sumConcat += element;
    });

    console.log(`${sum}\n${sum1}\n${sumConcat}\n`);
}

solve([1, 2, 3]);
