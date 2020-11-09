function inventory(input) {
    register = [];

    function sortFunc(a, b) {
        return a.level - b.level;
    }

    for (const tokens of input) {
        let [name, level, items] = tokens.split(' / ');
        items = items.trim().split(', ');
        register.push({
            name,
            level: Number(level.trim()),
            items,
        });
    }

    register.sort(sortFunc);

    register.forEach((hero) => {
        const message = `Hero: ${hero.name}\nlevel => ${
            hero.level
        }\nitems => ${hero.items.sort().join(', ')}`;
        console.log(message);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
