function decipherMessage(args) {
    const wheelOfLetters = [
        ' ',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    const templateMatrix = readTemplateMatrix();
    const messageMatrix = readMessageMatrix();
    const templateMatrixRows = templateMatrix.length;
    const templeteMatrixCols = templateMatrix[0].length;

    decipherLetters();

    const message = buildMessage();
    console.log(message);

    function buildMessage() {
        let message = '';
        for (const row of messageMatrix) {
            message += row.join('');
        }
        return message;
    }

    function decipherLetters() {
        for (let i = 0; i < messageMatrix.length; i += templateMatrixRows) {
            for (
                let j = 0;
                j < messageMatrix[0].length;
                j += templeteMatrixCols
            ) {
                decipherTemplateMatrix(i, j);
            }
        }
    }

    function decipherTemplateMatrix(i, j) {
        for (let k = 0; k < templateMatrixRows; k++) {
            for (let l = 0; l < templeteMatrixCols; l++) {
                if (
                    i + k < messageMatrix.length &&
                    j + l < messageMatrix[0].length
                ) {
                    const letterNumber =
                        messageMatrix[i + k][j + l] + templateMatrix[k][l];
                    const index = letterNumber % wheelOfLetters.length;
                    messageMatrix[i + k][j + l] = wheelOfLetters[index];
                }
            }
        }
    }

    function readTemplateMatrix() {
        const sizeTemplMatrix = args.shift();
        let templateMatrix = [];
        for (let i = 0; i < sizeTemplMatrix; i++) {
            let row = args.shift();
            templateMatrix.push(row.split(' ').map(Number));
        }
        return templateMatrix;
    }

    function readMessageMatrix() {
        const messageMatrix = [];
        for (const row of args) {
            messageMatrix.push(row.split(' ').map(Number));
        }
        return messageMatrix;
    }
}

decipherMessage([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22',
]);

decipherMessage([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22',
]);
