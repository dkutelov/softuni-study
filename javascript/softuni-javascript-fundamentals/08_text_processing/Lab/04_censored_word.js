function solve(text, word) {
    while (text.indexOf(word) > -1) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

solve('A small sentence with some words', 'small');
