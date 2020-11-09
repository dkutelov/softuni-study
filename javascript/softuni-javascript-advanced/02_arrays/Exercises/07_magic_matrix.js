function isMatrixMagic(matrix) {
    const rowSum = customSum(matrix[0]);

    matrix.forEach( row => {
        if (customSum(row) !== rowSum) return false;
    });

    for (let i = 0; i < matrix[0].length; i++) {
        let colSum = 0;
        matrix.forEach( row => colSum += row[i]);
        if (colSum !== rowSum) return false;
    }

    return true;

    function customSum(arr) {
        return arr.reduce((acc,curr) => acc + curr, 0);
    }
}


console.log(isMatrixMagic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));