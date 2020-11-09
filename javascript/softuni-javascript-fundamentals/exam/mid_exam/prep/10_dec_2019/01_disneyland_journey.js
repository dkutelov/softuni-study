function solve(input) {
    const journeyCost = parseFloat(input.shift());
    const months = parseInt(input.shift());

    let mySavings = 0;
    for (let currentMonth = 1; currentMonth <= months; currentMonth++) {
        if (currentMonth % 4 === 0) {
            mySavings *= 1.25;
        }

        if (currentMonth % 2 === 1 && currentMonth >= 2) {
            mySavings *= 0.84;
        }

        mySavings += journeyCost * 0.25;
    }

    const difference = mySavings - journeyCost;

    if (difference >= 0) {
        console.log(
            `Bravo! You can go to Disneyland and you will have ${difference.toFixed(
                2
            )}lv. for souvenirs.`
        );
    } else {
        console.log(
            `Sorry. You need ${Math.abs(difference.toFixed(2))}lv. more.`
        );
    }
}

solve(['1000', '4']);
solve(['3265', '3']);
