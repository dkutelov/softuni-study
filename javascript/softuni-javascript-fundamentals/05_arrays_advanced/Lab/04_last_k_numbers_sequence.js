function lastK(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let currentNumber = 0;
        for (let j = i - k; j < i; j++) {
            if (j >= 0) {
                currentNumber += result[j];
            }
        }
        result.push(currentNumber);
    }

    console.log(result.join(' '));
}

lastK(8, 2);
