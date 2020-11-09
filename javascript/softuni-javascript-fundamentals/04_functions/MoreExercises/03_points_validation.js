function pointsValidation(coordinates) {
    function isDistanceValid(x1, y1, x2, y2) {
        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        return Number.isInteger(distance);
    }

    function printResult(x1, y1, x2, y2) {
        const isValid = isDistanceValid(x1, y1, x2, y2) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    }

    let [x1, y1, x2, y2] = coordinates;
    printResult(x1, y1, 0, 0);
    printResult(x2, y2, 0, 0);
    printResult(x1, y1, x2, y2);
}

console.log(pointsValidation([2, 1, 1, 1]));
