function solve(input) {
    const heroNames = input[0].split(/[, ]+/g);
    const herosObj = {};

    heroNames.forEach((heroName) => {
        const health = getHealth(heroName);
        const damage = getdDamage(heroName);
        herosObj[heroName] = [health, damage];
    });

    Array.from(Object.entries(herosObj))
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((hero) =>
            console.log(
                `${hero[0]} - ${hero[1][0]} health, ${hero[1][1].toFixed(
                    2
                )} damage`
            )
        );

    function getHealth(heroName) {
        const pattern = /[^0-9\.+\-\*/]/g;
        return Array.from(heroName.matchAll(pattern)).reduce(
            (prev, curr) => (prev += curr[0].charCodeAt()),
            0
        );
    }

    function getdDamage(heroName) {
        const pattern = /-?\d+(\.\d+)?/g;
        let numberSum = Array.from(heroName.matchAll(pattern)).reduce(
            (prev, curr) => (prev += parseFloat(curr[0])),
            0
        );
        const multiplies = Array.from(heroName.matchAll(/\*/g));
        if (multiplies) {
            numberSum *= 2 ** multiplies.length;
        }
        const divides = Array.from(heroName.matchAll(/\//g));
        if (divides) {
            numberSum /= 2 ** divides.length;
        }
        return numberSum;
    }
}

solve(['M3ph1st0**, Azazel']);
