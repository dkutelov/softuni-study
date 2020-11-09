function nMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(n);
    }
  }
  for (let row of matrix) {
    console.log(row.join(' '));
  }
}

nMatrix(5);
