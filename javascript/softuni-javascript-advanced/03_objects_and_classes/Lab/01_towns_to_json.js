function foo(rawData) {
    let results = [];
    let headings = rawData.shift();
    headings = townDataSplit(headings);

    rawData.forEach( townData => {
        let values = townDataSplit(townData);
        const town = {
            [headings[0]]: values[0],
            [headings[1]]: Number(values[1]).toFixed(2),
            [headings[2]]: Number(values[2]).toFixed(2),
        };
        results = [...results, JSON.stringify(town)];
    });

    console.log(results);

    function townDataSplit(data) {
        return data.split('|').filter(el => el !== '').map(el => el.trim());
    }
}

const res = foo(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

console.log(res);