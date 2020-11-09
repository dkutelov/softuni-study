function passwordValidator(password) {
    let isValid = true;

    const isCorrectLength = (passwordLength) =>
        passwordLength >= 6 && passwordLength <= 10;

    let isDigit = (c) => c >= 48 && c <= 57;

    function isAlphabetical(password) {
        let isLowerLetter = (c) => c >= 65 && c <= 90;
        let isUpperLetter = (c) => c >= 97 && c <= 122;

        let isValid = true;
        for (const char of password) {
            let n = char.charCodeAt(0);

            if (!isDigit(n) && !isLowerLetter(n) && !isUpperLetter(n)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    function hasTwoDigits(password) {
        let counter = 0;
        let isValid = false;
        for (const char of password) {
            let n = char.charCodeAt(0);
            if (isDigit(n)) {
                counter++;
            }

            if (counter == 2) {
                isValid = true;
                break;
            }
        }

        return isValid;
    }

    if (!isCorrectLength(password.length))
        console.log('Password must be between 6 and 10 characters');
    if (!isAlphabetical(password))
        console.log('Password must consist only of letters and digits');

    if (!hasTwoDigits(password))
        console.log('Password must have at least 2 digits');

    if (
        hasTwoDigits(password) &&
        isAlphabetical(password) &&
        isCorrectLength(password.length)
    ) {
        console.log('Password is valid');
    }
}

//passwordValidator('logIn');
//passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
