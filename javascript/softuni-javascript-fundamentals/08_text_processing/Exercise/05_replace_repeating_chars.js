function solve(text) {
    let res = text[0];

    for (let i = 1; i < text.length; i++) {
        const currentChar = text[i];
        if (currentChar !== text[i - 1]) {
            res += currentChar;
        }
    }

    console.log(res);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');
