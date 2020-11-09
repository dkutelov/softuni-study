function printTable(n) {
    for (let i = 1; i <= 10 ; i++) {
        console.log(`${n} X ${i} = ${i*n}`);
    }
}

function printTable2(n) {
    [...Array(10).keys()].map( i => {
        const currentNumber = i + 1;
        console.log(`${n} X ${currentNumber} = ${(currentNumber)*n}`);
    });
}

printTable2(5);