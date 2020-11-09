function solve(params) {
    const neighbourhood = new Map();
    const areas = params.shift().split(', ');
    areas.forEach((area) => {
        neighbourhood.set(area, []);
    });

    params.forEach((el) => {
        const [livingArea, person] = el.split(' - ');

        if (neighbourhood.get(livingArea)) {
            neighbourhood.set(
                livingArea,
                neighbourhood.get(livingArea).concat(person)
            );
        }
    });

    const sortedAreas = Array.from(neighbourhood.entries()).sort(
        (a, b) => b[1].length - a[1].length
    );

    sortedAreas.forEach((area) => {
        console.log(`${area[0]}: ${area[1].length}`);
        area[1].forEach((person) => console.log(`--${person}`));
    });
}

solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy',
]);
