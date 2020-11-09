function solve(words, text) {
    words = words.split(', ');
    const searchedPatters = words.map((word) => '*'.repeat(word.length));
    for (let i = 0; i < searchedPatters.length; i++) {
        text = text.replace(searchedPatters[i], words[i]);
    }
    console.log(text);
}

solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);
