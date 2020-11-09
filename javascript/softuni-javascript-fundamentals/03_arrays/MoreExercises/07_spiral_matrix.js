function spiralMatrix(n, m) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  const size = m * n;
  let i = 0;
  let j = 0;

  let increaseI = false;
  let decreaseI = false;
  let increaseJ = true;
  let decreaseJ = false;

  for (let k = 1; k <= size; k++) {
    matrix[i][j] = k;

    if (increaseJ) {
      if (j + 1 === m || matrix[i][j + 1] !== 0) {
        increaseJ = false;
        increaseI = true;
      } else {
        j++;
      }
    }

    if (increaseI) {
      if (i + 1 === n || matrix[i + 1][j] !== 0) {
        increaseI = false;
        decreaseJ = true;
      } else {
        i++;
      }
    }

    if (decreaseJ) {
      if (j - 1 < 0 || matrix[i][j - 1] !== 0) {
        decreaseJ = false;
        decreaseI = true;
      } else {
        j--;
      }
    }

    if (decreaseI) {
      if (matrix[i - 1][j] !== 0) {
        j++;
        decreaseI = false;
        increaseJ = true;
      } else {
        i--;
      }
    }
  }
  for (let row of matrix) {
    console.log(row.join(' '));
  }
}

spiralMatrix(3, 3);
