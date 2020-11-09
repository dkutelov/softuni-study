function diagonalAttack(rawMatrix) {
  const matrix = [];
  for (let row of rawMatrix) {
    const currentRow = [];
    for (let n of row.split(' ')) {
      currentRow.push(Number(n));
    }
    matrix.push(currentRow);
  }

  const size = matrix.length;
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < size; i++) {
    primarySum += matrix[i][i];
    secondarySum += matrix[i][size - i - 1];
  }

  if (primarySum === secondarySum) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === j || i === size - j - 1) {
          continue;
        } else {
          matrix[i][j] = primarySum;
        }
      }
    }
  }

  for (let row of matrix) {
    console.log(row.join(' '));
  }
}

diagonalAttack([
  '5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1',
]);

diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);
