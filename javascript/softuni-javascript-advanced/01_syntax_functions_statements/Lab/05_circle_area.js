function solve(param) {
    if (typeof param === 'number') {
        const r = param;
        const area = Math.PI * r ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(
            `We can not calculate the circle area, because we receive a ${typeof param}.`
        );
    }
}

solve(5);
solve('5');
solve([]);
