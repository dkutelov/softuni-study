// solution 1
function mathPower1(n, power) {
    let result = n;

    for (let i = 1; i < power; i++) {
        result *= n;
    }

    return result;
}

// solution 2
function mathPower(n, power) {
    if (power === 1) {
        return n;
    }

    return (n = n * mathPower1(n, power - 1));
}

console.log(mathPower1(2, 8));
