function diagonalAttack(rawMatrix) {
    let matrix = rawMatrix.map( row => row.split(' ').map(Number));


    const { main, secondary} = calculateMainDiagonals();

    if (main === secondary) {
        matrix = matrix.map( (row, i) => {
            return row.map( (cell, j) => {
                if (i !== j && i !== matrix.length - 1 - j) {
                    return main;
                }
                return cell;
            })
        })
    }

    matrix.forEach(row => console.log(row.join(' ')));

    function calculateMainDiagonals() {
        const main = matrix.reduce((acc, curr, i) => acc + curr[i], 0);
        const secondary = matrix.reduce((acc, curr, i) => acc + curr[matrix.length - i - 1], 0);
        return {main, secondary}
    }
}


diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'])

