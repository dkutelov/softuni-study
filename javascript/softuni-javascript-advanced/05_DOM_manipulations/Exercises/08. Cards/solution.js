function solve() {
    const [firstSpan, _, secondSpan] = document.querySelectorAll(
        '#result span'
    );
    const cardsPlayer1 = document.querySelector('#player1Div');
    const cardsPlayer2 = document.querySelector('#player2Div');
    let resultPlayer1 = 0;
    let resultPlayer2 = 0;
    let currentCardPlayer1 = null;
    let currentCardPlayer2 = null;
    const historyDiv = document.getElementById('history');

    cardsPlayer1.addEventListener('click', onPlayer1CardClick);
    cardsPlayer2.addEventListener('click', onPlayer2CardClick);

    function onPlayer1CardClick(e) {
        if (e.target.tagName !== 'IMG') return;
        if (currentCardPlayer2 === null) clearCurrentResult();
        currentCardPlayer1 = e.target;
        e.target.src = 'images/whiteCard.jpg';
        resultPlayer1 = Number(e.target.name);
        firstSpan.textContent = resultPlayer1.toString();
        if (currentCardPlayer2 !== null) {
            setBorders();
            showResult();
            resetCurrentCards();
        }
    }

    function onPlayer2CardClick(e) {
        if (e.target.tagName !== 'IMG') return;
        if (currentCardPlayer1 === null) clearCurrentResult();
        currentCardPlayer2 = e.target;
        e.target.src = 'images/whiteCard.jpg';
        resultPlayer2 = Number(e.target.name);
        secondSpan.textContent = resultPlayer2.toString();
        if (currentCardPlayer1 !== null) {
            setBorders();
            showResult();
            resetCurrentCards();
        }
    }

    function setBorders() {
        if (resultPlayer1 >= resultPlayer2) {
            currentCardPlayer1.style.border = '2px solid green';
            currentCardPlayer2.style.border = '2px solid red';
        } else {
            currentCardPlayer1.style.border = '2px solid red';
            currentCardPlayer2.style.border = '2px solid green';
        }
    }

    function showResult() {
        historyDiv.textContent += `[${resultPlayer1} vs ${resultPlayer2}] `;
    }

    function clearCurrentResult() {
        firstSpan.textContent = '';
        secondSpan.textContent = '';
    }

    function resetCurrentCards() {
        currentCardPlayer1 = null;
        currentCardPlayer2 = null;
    }
}
