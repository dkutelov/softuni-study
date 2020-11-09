function solve(params) {
    const towns = params.reduce( (acc, curr, i ) => {
        if (i % 2 === 0 && i % 2 === 0 && !acc.hasOwnProperty(curr)) {
            acc[curr] = 0;
        }
        if (i % 2 !== 0 ) {
            acc[params[i-1]] += Number(curr);
        }
        return acc;
    }, {});

    console.log(JSON.stringify(towns));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])