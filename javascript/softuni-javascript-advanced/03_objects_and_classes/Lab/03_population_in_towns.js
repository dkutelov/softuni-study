function solve(params) {
    const towns = params.reduce((acc, curr) => {
        let [town, population] = curr.split(' <-> ');

        if ( !acc.hasOwnProperty(town)) {
            acc[town] = 0;
        }

        acc[town] += Number(population);
        return acc;
    }, {});

    for (let key in towns) {
        console.log(`${key} : ${towns[key]}`)
    }
}


solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1200000']
);