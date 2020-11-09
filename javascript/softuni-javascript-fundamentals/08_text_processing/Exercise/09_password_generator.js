function generatePassword(input) {
    const passwordSourceText = input[0].concat(input[1]);
    const substitutes = input[2].toUpperCase();

    passwordText = getPasswordText(passwordSourceText, substitutes);
    passwordText = passwordText.split('').reverse().join('');

    console.log(`Your generated password is ${passwordText}`);

    function getPasswordText(text, substitutes) {
        let result = '';
        const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
        let subIndex = 0;
        for (const char of text) {
            if (vowels.includes(char)) {
                result += substitutes[subIndex];
                subIndex++;
                if (subIndex === substitutes.length) subIndex = 0;
            } else {
                result += char;
            }
        }
        return result;
    }
}

generatePassword(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
