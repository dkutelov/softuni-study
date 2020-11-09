function solve(n, k) {
    const resArr = [1];

    for (let i = 1; i < n; i++) {
        const start = i - k > 0 ? i - k : 0;
        const newValue = resArr.slice(start, i).reduce((sum, currentValue) => sum + currentValue, 0);
        resArr.push(newValue)
    }
    console.log(resArr.join(' '))
}

solve(6,3);
solve(8,2);