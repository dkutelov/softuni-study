function buildWall(wall) {
    const concerPerFoot = 195;
    const costPerCubic = 1900;
    let amount = 0;
    let concretPerDays = [];

    const isModuleComplete = (module) => module === 30;

    while (!wall.every(isModuleComplete)) {
        let dailyConcret = 0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                dailyConcret += concerPerFoot;
            }
        }
        concretPerDays.push(dailyConcret);
        amount += dailyConcret * costPerCubic;
    }
    console.log(concretPerDays.join(', '));
    console.log(`${amount} pesos`);
}

buildWall([21, 25, 28]);
