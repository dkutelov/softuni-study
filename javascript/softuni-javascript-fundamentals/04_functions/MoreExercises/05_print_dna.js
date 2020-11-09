function printDNA(n) {
    const dnaSequences = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let result = '';
    let leftLetterPos = 2;
    let direction = 0;

    function getNextLeftPosition(leftLetterPos) {
        if (leftLetterPos === 0) {
            direction = 1;
        } else if (leftLetterPos === 2) {
            direction = 0;
        }

        direction ? leftLetterPos++ : leftLetterPos--;
        return leftLetterPos;
    }

    function buildRow(leftLetterPos, currentLetters) {
        const rightLetterPos = 5 - leftLetterPos;
        let currentRow = '';

        for (let j = 0; j < 6; j++) {
            if (j < leftLetterPos || j > rightLetterPos) {
                currentRow += '*';
            } else if (j === leftLetterPos) {
                currentRow += currentLetters[0];
            } else if (leftLetterPos < j && j < rightLetterPos) {
                currentRow += '-';
            } else if (j === rightLetterPos) {
                currentRow += currentLetters[1];
            }
        }
        return currentRow;
    }

    for (let i = 0; i < n; i++) {
        const currentLetters = dnaSequences[i % 5];
        const currentRow = buildRow(leftLetterPos, currentLetters);
        result += currentRow + '\n';
        leftLetterPos = getNextLeftPosition(leftLetterPos);
    }

    return result;
}

printDNA(10);
