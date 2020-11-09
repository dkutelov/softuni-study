function lettersNumbersGame(input) {
    const tokens = input.split(' ');
    let res = 0;
    const smallcaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let token of tokens) {
        if (token) {
            const firstLetter = token[0];
            const lastLetter = token[token.length - 1];
            let num = Number(token.substring(1, token.length - 1));
            const firstLetterPos =
                smallcaseAlphabet.indexOf(firstLetter.toLowerCase()) + 1;
            const lastLetterPos =
                smallcaseAlphabet.indexOf(lastLetter.toLowerCase()) + 1;

            if (isUpperCase(firstLetter)) {
                num /= firstLetterPos;
            } else {
                num *= firstLetterPos;
            }
            if (isUpperCase(lastLetter)) {
                num -= lastLetterPos;
            } else {
                num += lastLetterPos;
            }
            res += num;
        }
    }
    console.log(res.toFixed(2));
    function isUpperCase(letter) {
        return !smallcaseAlphabet.includes(letter);
    }
}

lettersNumbersGame('a1A');
