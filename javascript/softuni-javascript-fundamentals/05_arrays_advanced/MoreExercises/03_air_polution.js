function airPolution(rawMatix, rawCommands) {
    let matrix = readMatrix(rawMatix);
    const commands = readCommands(rawCommands);

    for (const command of commands) {
        const [commandName, commandVal] = command;

        switch (commandName) {
            case 'breeze':
                matrix = breezeMatrix(matrix, commandVal);
                break;
            case 'gale':
                matrix = galeMatrix(matrix, commandVal);
                break;
            case 'smog':
                matrix = smogMatrix(matrix, commandVal);
                break;
        }
    }

    polutedBlocks = getPolutedBlocks(matrix);

    printResults(polutedBlocks);

    function printResults(blocks) {
        if (blocks.length) {
            let areas = [];
            for (const block of blocks) {
                areas.push(`[${block.join('-')}]`);
            }
            console.log(`Polluted areas: ${areas.join(', ')}`);
        } else {
            console.log('No polluted areas');
        }
    }

    function getPolutedBlocks(matrix) {
        let polutedBlocks = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] >= 50) {
                    polutedBlocks.push([i, j]);
                }
            }
        }
        return polutedBlocks;
    }

    function breezeMatrix(matrix, idx) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[idx][i] -= 15;
            if (matrix[idx][i] < 0) {
                matrix[idx][i] = 0;
            }
        }
        return matrix;
    }

    function galeMatrix(matrix, idx) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][idx] -= 20;
            if (matrix[i][idx] < 0) {
                matrix[i][idx] = 0;
            }
        }
        return matrix;
    }

    function smogMatrix(matrix, val) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[i][j] += val;
            }
        }
        return matrix;
    }

    function readMatrix(strMatrix) {
        let matrix = [];
        for (const row of strMatrix) {
            matrix.push(row.split(/\s+/).map(Number));
        }
        return matrix;
    }

    function readCommands(rawCommands) {
        let commands = [];
        for (const command of rawCommands) {
            const [commandName, commandVal] = command.split(/\s+/);
            commands.push([commandName, Number(commandVal)]);
        }
        return commands;
    }
}

//airPolution(
//     [
//         '5 7 72 14 4',
//         '41 35 37 27 33',
//         '23 16 27 42 12',
//         '2 20 28 39 14',
//         '16 34 31 10 24',
//     ],
//     ['breeze 1', 'gale 2', 'smog 25']
// );

airPolution(
    [
        '5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24',
    ],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);
