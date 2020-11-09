function findEqualNeighbors(matrix) {
    let count = 0;
    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i + 1 < n && matrix[i][j] === matrix[i + 1][j]) {
                count++;
            }
            if (j + 1 < m && matrix[i][j] === matrix[i][j + 1]) {
                count++;
            }
        }
    }

    return count;
}

const res = findEqualNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2],
]);

console.log(res);
