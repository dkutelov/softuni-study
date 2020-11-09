function solve(stringArray) {
    function sortByTwo(a, b) {
        const lengthDifference = a.length - b.length;

        if (lengthDifference !== 0) {
            return lengthDifference;
        } else {
            return a.localeCompare(b);
        }
    }

    stringArray.sort(sortByTwo);

    for (const word of stringArray) {
        console.log(word);
    }
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George', 'Beorge']);
console.log('------------');
solve(['alpha', 'beta', 'gamma']);
