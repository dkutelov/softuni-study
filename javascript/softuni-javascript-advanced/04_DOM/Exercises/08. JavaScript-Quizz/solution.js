function solve() {
    let currentQuestion = 0;
    const correctAnswers = [2, 4, 2];
    let correctAnswerCount = 0;
    const sections = document.getElementsByTagName('section');
    let answers = document.getElementsByClassName('answer-text');
    [...answers].forEach(answer => addEventListener('click', clickHandler));

    function clickHandler(e) {
        let clickedElement = e.target;
        let parentElement  = clickedElement.parentElement.parentElement;
        const answerIndex = Number(parentElement.dataset.quizindex);

        if (answerIndex === correctAnswers[currentQuestion]) {
            correctAnswerCount++;
        }

        sections[currentQuestion].style.display = 'none';
        if (currentQuestion < 2) {
            sections[currentQuestion + 1].style.display= 'block';
            currentQuestion += 1;
        } else {
            let message;
            if (correctAnswerCount === 3) {
                message = "You are recognized as top JavaScript fan!";
            } else {
                message = `You have ${correctAnswerCount} right answers`;
            }
            const resultSection = document.getElementById('results');
            resultSection.style.display = 'block';
            const result = document.querySelector('.results-inner h1');
            result.textContent = message;
        }
    }
}
