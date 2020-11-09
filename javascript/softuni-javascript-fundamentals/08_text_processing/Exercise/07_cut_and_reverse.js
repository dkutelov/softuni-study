function solve(text) {
    const textLength = text.length;

    const halfOne = text.substring(0, textLength / 2);
    const halfTwo = text.substring(textLength / 2);

    console.log(reverseString(halfOne));
    console.log(reverseString(halfTwo));

    function reverseString(myStr) {
        return myStr.split('').reverse().join('');
    }
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
