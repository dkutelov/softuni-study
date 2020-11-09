function killBunny(args) {
    const lastIndex = args.length - 1;
    let matrix = readMatrix(args.slice(0, lastIndex));
    const matrixRowsIdx = matrix.length;
    const matrixColIdx = matrix[0].length;
    const coordinates = getCoordinates(args[lastIndex]);
    let killCount = 0;
    let killAmount = 0;

    for (const bombBunny of coordinates) {
        matrix = explodeBunny(matrix, bombBunny);
    }

    for (let i = 0; i < matrixRowsIdx; i++) {
        for (let j = 0; j < matrixColIdx; j++) {
            if (matrix[i][j] > 0) {
                killCount += 1;
                killAmount += matrix[i][j];
            }
        }
    }

    console.log(killAmount);
    console.log(killCount);

    function readMatrix(matrix) {
        let numberMatrix = [];
        for (const row of matrix) {
            numberMatrix.push(row.split(' ').map(parseFloat));
        }

        return numberMatrix;
    }

    function getCoordinates(coordinatesString) {
        let coordinates = [];
        let coordinatesDoubles = coordinatesString.split(' ');
        for (const coordinate of coordinatesDoubles) {
            coordinates.push(coordinate.split(',').map(Number));
        }
        return coordinates;
    }

    function explodeBunny(matrix, bunnyCoordinates) {
        const [x, y] = bunnyCoordinates;
        const bombValue = matrix[x][y];

        if (bombValue > 0) {
            killCount++;
            killAmount += bombValue;

            for (let row = x - 1; row <= x + 1; row++) {
                for (let col = y - 1; col <= y + 1; col++) {
                    if (
                        row >= 0 &&
                        col >= 0 &&
                        row < matrixRowsIdx &&
                        col < matrixColIdx
                    ) {
                        matrix[row][col] -= bombValue;
                    }
                }
            }
        }

        return matrix;
    }
}

killBunny([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1',
]);
