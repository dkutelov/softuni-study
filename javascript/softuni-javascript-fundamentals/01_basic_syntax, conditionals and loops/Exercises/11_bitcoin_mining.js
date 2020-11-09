function solve(goldAmount) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let goldSum = 0;
    let bitcoins = 0;
    let firstDay = 0;

    for (let i = 0; i < goldAmount.length; i++) {

        let dailyGoldAmount  = goldAmount[i];

        if ( (i + 1) % 3 === 0 ){
            dailyGoldAmount *= 0.7;

        }

        goldSum += (dailyGoldAmount * goldPrice);

        if ( goldSum >= bitcoinPrice) {
            const newBitcoins = Math.floor(goldSum/ bitcoinPrice);
            bitcoins += newBitcoins;
            goldSum -= ( bitcoinPrice * newBitcoins);
            if (firstDay == 0) {
                firstDay = i+1;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if ( bitcoins > 0 ) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${goldSum.toFixed(2)} lv.`);
}

//solve([100,200,300]);
// solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);


