function solve(params) {
    let wordCounter = new Map();
    const words = params.split(' ');

    words.forEach((word) => {
        word = word.toLowerCase();
        if (!wordCounter.has(word)) {
            wordCounter.set(word, 0);
        }
        const updateCount = wordCounter.get(word) + 1;
        wordCounter.set(word, updateCount);
    });

    let result = '';

    for (const [word, count] of wordCounter.entries(0)) {
        if (count % 2 === 1) {
            result += `${word} `;
        }
    }

    console.log(result.trim());
}

// not working in judge since object re-orders the elements: 1 5 c# php e.g. brings number keys in front
function solveObj(params) {
    let wordCounter = {};

    const words = params.split(' ');
    words.forEach((word) => {
        word = word.toLowerCase();
        if (wordCounter[word] === undefined) {
            wordCounter[word] = 0;
        }
        wordCounter[word]++;
    });

    let result = '';

    for (const [word, count] of Object.entries(wordCounter)) {
        if (count % 2 === 1) {
            result += `${word} `;
        }
    }

    console.log(result.trim());
}

solveObj('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
