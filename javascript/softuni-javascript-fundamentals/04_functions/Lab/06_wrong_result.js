function wrongResult(n1, n2, n3) {
    let result = '';

    if (n1 == 0 || n2 == 0 || n3 == 0) {
        result = 'Positive';
    } else if (n1 > 0 && n2 > 0 && n3 > 0) {
        result = 'Positive';
    } else if (n1 < 0 && n2 < 0 && n3 < 0) {
        result = 'Negative';
    } else {
        if ((n1 > 0 && n2 > 0) || (n2 > 0 && n3 > 0) || (n1 > 0 && n3 > 0)) {
            result = 'Negative';
        } else {
            result = 'Positive';
        }
    }

    console.log(result);
}

console.log(wrongResult1(5, 12, -15));

function wrongResult1(n1, n2, n3) {
    const isPositive = (a, b) => a * b;
    let result = isPositive(isPositive(n1, n2), n3);
    return `${result >= 0 ? 'Positive' : 'Negative'}`;
}
