function solve(text) {
    textArr = text.split(' ');

    textArr.forEach((word) => {
        if (word.startsWith('#')) {
            word = word.substring(1);

            if (word.length > 0 && isOnlyLetters(word)) {
                console.log(word);
            }
        }
    });

    function isOnlyLetters(word) {
        for (const char of word) {
            const charCode = char.charCodeAt();
            if (
                charCode < 65 ||
                charCode > 122 ||
                (charCode > 90 && charCode < 97)
            ) {
                return false;
            }
        }
        return true;
    }
}

solve(
    'Nowadays everyone uses # to tag a #special #spe3cial word in #socialMedia'
);
