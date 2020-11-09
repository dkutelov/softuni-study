function getEnglishNameoftheLastDigit(number) {
    const lastNumber = number % 10;
    const englishNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'nine'];
    console.log(englishNames[lastNumber]);
}

getEnglishNameoftheLastDigit(512);
getEnglishNameoftheLastDigit(1);
getEnglishNameoftheLastDigit(1643);