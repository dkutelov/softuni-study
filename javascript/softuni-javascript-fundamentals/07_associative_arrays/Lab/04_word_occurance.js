function solve(params) {
    let wordCounter = new Map();

    params.forEach((word) => {
        if (!wordCounter.has(word)) {
            wordCounter.set(word, 0);
        }

        const updatedWordcount = wordCounter.get(word) + 1;
        wordCounter.set(word, updatedWordcount);
    });

    const sortedWordCounter = Array.from(wordCounter.entries()).sort(
        (a, b) => b[1] - a[1]
    );

    for (const [word, count] of sortedWordCounter) {
        console.log(`${word} -> ${count} times`);
    }
}

solve([
    'Here',
    'is',
    'the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'sentence',
    'And',
    'finally',
    'the',
    'third',
    'sentence',
]);
