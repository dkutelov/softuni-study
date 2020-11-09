function solve(n) {
    const numberOfStars = n || 5;

    for (let i = 0; i < numberOfStars; i++) {
        console.log('* '.repeat(numberOfStars));
    }
}

solve();
solve(null);
