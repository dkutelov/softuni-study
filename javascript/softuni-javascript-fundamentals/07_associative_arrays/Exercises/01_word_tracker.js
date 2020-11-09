function solveMap(params) {
    let wordCounter = new Map();
    const targetWords = params.shift().split(' ');
    const words = params;

    targetWords.forEach((word) => {
        wordCounter.set(word, 0);
    });

    words.forEach((word) => {
        if (wordCounter.has(word)) {
            const updateCount = wordCounter.get(word) + 1;
            wordCounter.set(word, updateCount);
        }
    });

    const sortedWordCounter = Array.from(wordCounter.entries()).sort(
        (a, b) => b[1] - a[1]
    );

    for (const [word, count] of sortedWordCounter) {
        console.log(`${word} - ${count}`);
    }
}

function solveObj(params) {
    let wordCounter = getTargetWords(params.slice(0, 1));
    wordCounter = getTargetWordsCount(params.slice(1), wordCounter);
    const sortedWordCounter = sortWordCounter(wordCounter);
    printWordCounter(wordCounter);

    function getTargetWords(arr) {
        const obj = {};
        arr[0].split(' ').forEach((word) => {
            obj[word] = 0;
        });
        return obj;
    }

    function getTargetWordsCount(words, wordCounter) {
        words.forEach((word) => {
            if (wordCounter[word] !== undefined) {
                wordCounter[word]++;
            }
        });
        return wordCounter;
    }

    function sortWordCounter(wordCounter) {
        return Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);
    }

    function printWordCounter(wordCounter) {
        for (const [word, count] of sortedWordCounter) {
            console.log(`${word} - ${count}`);
        }
    }
}

solveObj([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurances',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task',
]);
