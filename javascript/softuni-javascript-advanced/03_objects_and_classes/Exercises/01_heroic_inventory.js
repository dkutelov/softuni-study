function foo(data) {
    let registry = [];

    data.forEach( dataLine => {
        let [name, level,  items]  = dataLine.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        registry = [...registry, {
            name,
            level,
            items
        }];
    });

    return JSON.stringify(registry);
}

const res = foo(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

console.log(res);