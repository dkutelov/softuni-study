function orbit(tokens) {
  let [width, height, x, y] = tokens;
  let step = Math.max(width - x, x, height - y, y);

  function createEmptyMatrix(n, m) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push([]);
      for (let j = 0; j < m; j++) {
        matrix[i].push(0);
      }
    }
    return matrix;
  }

  const matrix = createEmptyMatrix(width, height);

  for (let n = step + 1; n > 1; n--) {
    for (let i = x - n + 1; i <= x + n - 1; i++) {
      for (let j = y - n + 1; j <= y + n - 1; j++) {
        if (i >= 0 && i < width && j >= 0 && j < height) {
          matrix[i][j] = n;
        }
      }
    }
  }

  matrix[x][y] = 1;

  for (let row of matrix) {
    console.log(row.join(' '));
  }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
