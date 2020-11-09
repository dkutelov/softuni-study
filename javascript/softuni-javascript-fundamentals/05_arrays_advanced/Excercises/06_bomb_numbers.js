function detonateBombs(allBombs, specialBomb) {
    const [bombNumber, bombPower] = specialBomb;

    for (let i = 0; i < allBombs.length; i++) {
        if (allBombs[i] === bombNumber) {
            let startIndex = 0;
            let deleteCount = 1 + bombPower;

            if (i - bombPower < 0) {
                deleteCount += bombPower - i;
            } else {
                startIndex = i - bombPower;
                deleteCount += bombPower;
            }

            allBombs.splice(startIndex, deleteCount);
            i = i - bombPower - 1;
        }
    }

    console.log(
        allBombs.reduce((prevVal, currentVal) => prevVal + currentVal, 0)
    );
}

function detonateBombs1(allBombs, specialBomb) {
    const [bombIndex, bombPower] = specialBomb;

    let index = allBombs.indexOf(bombIndex);

    while (index > -1) {
        allBombs.splice(index - bombPower, bombPower * 2 + 1);

        index = allBombs.indexOf(bombIndex);
    }

    console.log(allBombs);
}

detonateBombs1([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
detonateBombs1([1, 7, 7, 1, 2, 3], [7, 1]);
detonateBombs1([1, 4, 4, 2, 8, 9, 1], [9, 3]);
detonateBombs1([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
detonateBombs1([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);
