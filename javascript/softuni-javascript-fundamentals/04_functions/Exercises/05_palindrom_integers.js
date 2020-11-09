function palindromIntegers(numbers) {
    function converttoArray(number) {
        const result = [];
        while (number > 0) {
            const digit = number % 10;
            result.push(digit);
            number = parseInt(number / 10);
        }
        return result;
    }
    function isPalindrom(number) {
        const numArr = converttoArray(number);
        const numArrLength = numArr.length;
        for (let i = 0; i < parseInt(numArrLength / 2); i++) {
            if (numArr[i] !== numArr[numArrLength - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    for (let number of numbers) {
        console.log(isPalindrom(number));
    }
}

palindromIntegers([123, 323, 421, 121]);
palindromIntegers([32, 2, 232, 1010]);
