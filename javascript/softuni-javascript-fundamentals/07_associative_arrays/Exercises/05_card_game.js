function playCards(params) {
    const players = new Map();
    const cardsStrength = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    };
    const colorStrength = { C: 1, D: 2, H: 3, S: 4 };
    params.forEach((playerData) => {
        let [playerName, cardsData] = playerData.split(': ');
        let cards = cardsData.split(', ');

        if (!players.has(playerName)) {
            players.set(playerName, []);
        }

        for (const card of cards) {
            if (players.get(playerName).includes(card)) {
                continue;
            }
            const updatedCards = players.get(playerName).concat(card);
            players.set(playerName, updatedCards);
        }
    });

    const playersCards = Array.from(players.entries());

    for (const player of playersCards) {
        const playerScore = getPlayerScore(player[1]);
        console.log(`${player[0]}: ${playerScore}`);
    }

    function getPlayerScore(cards) {
        let score = 0;
        cards.forEach((currentCard) => {
            const currentLen = currentCard.length;
            const currentStrengt =
                cardsStrength[currentCard.slice(0, currentLen - 1)];
            const currentColor =
                colorStrength[currentCard.slice(currentLen - 1)];
            score += currentStrengt * currentColor;
        });
        return score;
    }
}

playCards([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',
]);
