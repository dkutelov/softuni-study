function solve(n, m) {
    let result = 0;

    n = Number(n);
    m = Number(m);

    for (let i = n; i <= m; i++) {
        result += i;
    }
    console.log(result);
}

solve(1, 3);
