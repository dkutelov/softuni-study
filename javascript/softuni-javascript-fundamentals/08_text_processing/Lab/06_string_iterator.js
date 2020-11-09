function solve(text) {
    text = text.replace(' ', '\n');
    if (text.indexOf(' ') === -1) {
        console.log(text);
        return;
    }
    solve(text);
}

function solveIterator(text) {
    let words = text.split(' ');

    let iterator = {
        next: function () {
            let isDone = words.length === 0;
            let currentWord = words.shift();
            return {
                value: currentWord,
                done: isDone,
            };
        },
    };

    let nextElement = iterator.next();

    while (!nextElement.done) {
        console.log(nextElement.value);
        nextElement = iterator.next();
    }
}

function solveIterator2(text) {
    let splitWords = text.split(' ');

    let words = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    let isDone = splitWords.length === 0;
                    let currentWord = splitWords.shift();
                    return {
                        value: currentWord,
                        done: isDone,
                    };
                },
            };
        },
    };

    for (const word of words) {
        console.log(word);
    }
}

solveIterator2('Et cillum do voluptate cillum ut cupidatat aliqua.');
