function charsInRange(firstChar, secondChar) {
    let firstCode = getCharValue(firstChar);
    let secondCode = getCharValue(secondChar);

    [firstCode, secondCode] = smallerFirst(firstCode, secondCode);
    let result = buildRange(firstCode, secondCode);
    console.log(result);

    function getCharValue(char) {
        return char.charCodeAt(0);
    }

    function smallerFirst(firstCode, secondCode) {
        if (secondCode < firstCode) {
            [firstCode, secondCode] = [secondCode, firstCode];
        }

        return [firstCode, secondCode];
    }

    function buildRange(start, end) {
        let result = '';
        for (let i = start + 1; i < end; i++) {
            result += `${String.fromCharCode(i)} `;
        }
        return result;
    }
}

charsInRange('a', 'd');
charsInRange('d', 'a');
charsInRange('#', ':');
charsInRange('C', '#');
