function solve(text, word) {
    const textArr = text.split(' ');
    result = textArr.filter((w) => w === word);
    console.log(result.length);
}

solve1('This is a word and it also is a sentence', 'is');
