function solve(params) {
    const collected = {};

    for (let i = 0; i < params.length; i += 2) {
        let currentMaterial = params[i];
        if (!collected[currentMaterial]) {
            collected[currentMaterial] = 0;
        }
        collected[currentMaterial] += Number(params[i + 1]);
    }

    for (const material in collected) {
        console.log(`${material} -> ${collected[material]}`);
    }
}

solve(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
