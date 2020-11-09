function solve(input) {
    const wordCount = {};
    let words = input[0]
        .replace(/[\'.,\/#!$%\^&\*;:{}=\-_`~()]/g," ")
        .split(' ').filter(el => el !== '').map(el => el.trim());

    words.forEach(word => {
        if (!wordCount[word]) {
            wordCount[word] = 0;
        }
        wordCount[word]++;
    });
    console.log(JSON.stringify(wordCount));
}


solve(['JS devs use Node.js for server-side JS.-- JS for devs']);