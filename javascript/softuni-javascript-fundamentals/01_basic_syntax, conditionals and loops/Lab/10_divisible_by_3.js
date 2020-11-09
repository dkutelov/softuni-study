function printNumbersDivisibleBy3() {
    for (let i = 3; i <= 100 ; i++) {
        if ( i % 3 === 0 ) {
            console.log(i);
        }
    }
}

printNumbersDivisibleBy3();