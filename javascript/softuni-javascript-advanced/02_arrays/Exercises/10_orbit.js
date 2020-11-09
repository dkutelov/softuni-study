function orbit(params) {
    const [width, height, x, y] = params;

    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push(new Array(width).fill(null));
    }

    const largestN = Math.max(Math.max(x, width - x),  Math.max(y,  height - y));

    fillWithNumber(largestN);

    matrix.forEach(row => console.log(row.join(' ')));

    function fillWithNumber(n) {
        const xStart = x - n + 1;
        const xEnd = x + n;
        const yStart = y - n + 1;
        const yEnd = y + n;

        for (let i = xStart; i < xEnd; i++) {
            for (let j = yStart; j < yEnd; j++) {
                if (i >= 0 && i < width && matrix[i][j] !== undefined) {
                    matrix[i][j] = n;
                }
            }
        }

        if ( n > 0) {
            fillWithNumber(n-1);
        }
    }
}

orbit([4, 4, 0, 0]);
//orbit([5, 5, 2, 2])