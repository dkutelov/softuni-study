function travelCostPerDestination(params) {
    const travel = new Map();

    params.forEach((param) => {
        let [country, city, cost] = param.split(' > ');
        cost = Number(cost);

        if (!travel.has(country)) {
            travel.set(country, new Map());
        }

        let currentCountry = travel.get(country);
        if (currentCountry.has(city)) {
            const currentCost = currentCountry.get(city);
            cost = Math.min(cost, currentCost);
        }
        currentCountry.set(city, cost);
    });

    const sorted_travel = Array.from(travel.entries()).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (const country of sorted_travel) {
        const cities = Array.from(country[1])
            .sort((a, b) => a[1] - b[1])
            .map((el) => `${el[0]} -> ${el[1]}`);
        console.log(`${country[0]} -> ${cities.join(' ')}`);
    }
}

travelCostPerDestination([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200',
]);
