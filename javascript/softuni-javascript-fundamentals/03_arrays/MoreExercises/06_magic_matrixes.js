function isMagicMatrix(matrix) {
  let sums = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      rowSum += matrix[i][j];
    }
    sums.push(rowSum);
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }
    sums.push(colSum);
  }

  let compareSum = 0;
  if (sums.length > 0) {
    compareSum = sums[0];
  }

  const sumsSameAsFirst = sums.filter((number) => number === compareSum);
  console.log(sumsSameAsFirst.length === sums.length);
}

isMagicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

isMagicMatrix([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);

isMagicMatrix([
  [11, 32, 45],
  [21, 0, 1],
]);
