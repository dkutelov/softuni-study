function foo(matrix) {
    const n = matrix.length;
    let pairCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const currentElement = matrix[i][j];
            if ( isValidIndex(j + 1, matrix[i].length) && currentElement === matrix[i][j+1]) {
                pairCount += 1;
            }
            if ( isValidIndex(i + 1, matrix.length) && currentElement === matrix[i+1][j]) {
                pairCount += 1;
            }
        }
    }

    console.log(pairCount);
    function isValidIndex(index, length) {
        return index >= 0 && index < length;
    }
}

function bar(matrix) {
    return matrix.reduce((acc, currRow, rowIndex) => {
        const currentCount = currRow.reduce((acc, currentItem, itemIndex) => {
            if (currentItem === currRow[itemIndex + 1]) {acc++}
            if (currentItem === (matrix[rowIndex + 1] || [])[itemIndex]) {acc++}
            return acc;
        },0);
        return acc + currentCount;
    }, 0);
}



foo([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

foo([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);

const res = bar([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
console.log(res);

const res1 = bar([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);
console.log(res1);