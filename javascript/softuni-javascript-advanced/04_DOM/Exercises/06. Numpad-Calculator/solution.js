function solve() {
    // variables
    const expressionOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');
    let keys = document.querySelector('.keys');

    let num1 = '';
    let num2 = '';
    let operator = null;

    // events
    keys.addEventListener('click', clickHandler);

    document.querySelector('.clear').addEventListener('click', function () {
        resetValues();
        expressionOutput.textContent = null;
        resultOutput.textContent = null;
    });

    // functions
    function clickHandler(e) {
        if (e.target.tagName !== 'BUTTON') return;
        let currentChar = e.target.value;

        if ( currentChar === '=') {
            handleResult();
            return;
        }

        if ( !isNaN(currentChar) || currentChar === '.') {
            expressionOutput.textContent += currentChar;

            if (!operator) {
                num1 += currentChar;
            } else {
                num2 += currentChar;
            }

        } else {
            expressionOutput.textContent += ` ${currentChar} `;
            operator = currentChar;
        }
    }

    function handleResult() {
        // check if 1 num plus operator
        if (!num1 || !num2 || !operator) {
            resultOutput.textContent = 'NaN';
            return;
        }

        const funcObj = {
            '+': (a, b) => a + b,
            '*': (a, b) => a * b,
            '-': (a, b) => a - b,
            '/': (a, b) => a / b,
        };

        resultOutput.textContent = funcObj[operator](Number(num1), Number(num2));
        resetValues();
    }

    function resetValues() {
        num1 = '';
        num2 = '';
        operator = null;
    }
}