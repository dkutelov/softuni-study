function ticTacToe(moves) {
    const dashboard = [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let player = 'X';
    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i].split(' ');
        x = +x;
        y = +y;

        if (dashboard[x][y] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        dashboard[x][y] = player;

        if (isWinner()) {
            console.log(`Player ${player} wins!`);
            break;
        }

        if (isGameOver()) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
        player = player === 'X' ? 'O' : 'X';
    }

    dashboard.forEach( row => console.log(row.join('\t')));

    function isWinner() {
        let winner = false;
        // rows and columns
        for (let i = 0; i < 3; i++) {
            let currentRowWins = isWinningTriple([dashboard[i][0], dashboard[i][1], dashboard[i][2]]);
            let currentColWins= isWinningTriple([dashboard[0][i], dashboard[1][i], dashboard[2][i]]);
            if (currentRowWins || currentColWins) {
                winner = true;
            }
        }
        // diagonals
        const diagonal1Wins = isWinningTriple([dashboard[0][0], dashboard[1][1], dashboard[2][2]]);
        const diagonal2Wins = isWinningTriple( [dashboard[0][2], dashboard[1][1], dashboard[2][0]]);
        if (diagonal1Wins || diagonal2Wins) {
            winner = true;
        }

        return winner;
    }

    function isWinningTriple(triple){
        return triple[0] && (triple[0] === triple[1] && triple[1] === triple[2])
    }

    function isGameOver() {
        return !dashboard.flat().includes(false);
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);