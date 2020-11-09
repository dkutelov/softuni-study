function solve(text) {
    let currentWord = '';
    const res = [];
    for (const char of text) {
        if (isUpper(char) && currentWord) {
            res.push(currentWord);
            currentWord = char;
        } else {
            currentWord += char;
        }
    }
    res.push(currentWord);
    console.log(res.join(', '));

    function isUpper(char) {
        const charCode = char.charCodeAt();
        return charCode >= 65 && charCode <= 90;
    }
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
