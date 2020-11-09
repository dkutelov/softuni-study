function solve(word, text) {
    const wordLowercase = word.toLowerCase();
    text = text.split(' ');
    let wordFound = false;

    for (const currentWord of text) {
        if (wordLowercase === currentWord.toLowerCase()) {
            console.log(word);
            wordFound = true;
            break;
        }
    }

    if (!wordFound) {
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');
