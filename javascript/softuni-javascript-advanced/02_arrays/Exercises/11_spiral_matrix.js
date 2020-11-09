function spiralMatrix(w,h) {
    const iterations = w * h;
    let matrix = [];
    let i = 0, j = 0;
    for (let i = 0; i < h; i++) {
        matrix.push(new Array(w).fill(null));
    }

    let k = 1;
    const maxK = w * h;

    let xStart = 0;
    let xEnd = w;
    let yStart  = 0;
    let yEnd = h;
    while ( k <= maxK) {
        for (let l = yStart; l < yEnd; l++) {
            matrix[xStart][l] = k;
            k++;
        }
        for (let j = xStart+1; j < xEnd -1; j++) {
            matrix[j][yEnd-1] = k;
            k++;
        }
        if (k > maxK) break;
        for (let m = yEnd-1; m >= yStart; m--) {
            matrix[xEnd-1][m] = k;
            k++;
        }
        for (let p = xEnd - 2; p > xStart; p--) {
            matrix[p][xStart] = k;
            k++;
        }
        xStart++;
        xEnd--;
        yStart++;
        yEnd--;
    }
    matrix.forEach(row => console.log(row.join(' ')));
}


spiralMatrix(6, 9);