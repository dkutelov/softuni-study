function solve() {
    const [checkButton, clearButton] = document.querySelectorAll('button');
    const inputs = [...document.querySelectorAll('input')];
    const table = document.querySelector('table');
    const resultMessageElement = document.querySelector('#check p');

    checkButton.addEventListener('click', checkHandler);
    clearButton.addEventListener('click', clearHandler);

    function checkHandler(e) {
        let isCorrect = true;
        const matrix = getInputs();

        for (let i = 0; i < 3; i++) {
            const col = [];
            const row = [];
            for (let j = 0; j < 3; j++) {
                col.push(matrix[j][i]);
                row.push(matrix[i][j]);
            }
            if (!isValid(row) || !isValid(col)) {
                isCorrect = false;
            }
        }

        if (!isCorrect) {
            showResult('red', "NOP! You are not done yet...");
            return;
        }
        showResult( 'green', "You solve it! Congratulations!");

        function getInputs() {
            const matrix = [[0,0,0], [0,0,0], [0,0,0]];
            inputs.forEach( (inputElement, index) => {
                const rowIndex = Math.floor(index/ 3);
                const colIndex = index % 3;
                const currentInput = Number(inputElement.value);
                if (!currentInput || !Number.isInteger(currentInput)) {
                    isCorrect = false;
                    return
                }
                matrix[rowIndex][colIndex] = currentInput;
            });
            return matrix;
        }
    }

    function isValid(numbers) {
        const inRange = numbers.some(x => x >= 1 && x <= 3);
        const unique = numbers.length === new Set(numbers).size;
        return unique && inRange
    }

    function showResult(color, message){
        table.style.border = `2px solid ${color}`;
        resultMessageElement.style.color = color;
        resultMessageElement.textContent = message;
    }

    function clearHandler(){
        inputs.forEach( inputElement  => inputElement.value = '');
        table.style.border = 'none';
        resultMessageElement.textContent = '';
    }
}