function decryptMessages(input) {
    const patternStar = /[starSTAR]/g;
    const messagesCount = input.shift();
    const messages = input;
    const attackedPlanets = [];
    const destroyedPlanets = [];

    for (let i = 0; i < messagesCount; i++) {
        const starCounts = Array.from(messages[i].matchAll(patternStar));
        const decryptKey = starCounts.length;
        const decryptedLine = decryptLine(messages[i], decryptKey);

        const pattern = /@(?<planet>[a-zA-Z]+)[^@\-!:>]*:[0-9]+[^@\-!:>]*!(?<attack>[AD])![^@\-!:>]*->[0-9]+/g;
        const planetData = pattern.exec(decryptedLine);

        if (planetData) {
            const planet = planetData.groups['planet'];
            const attackType = planetData.groups['attack'];
            if (attackType === 'A') {
                attackedPlanets.push(planet);
            } else {
                destroyedPlanets.push(planet);
            }
        }
    }

    printResults(attackedPlanets, 'Attack');
    printResults(destroyedPlanets, 'Destroy');

    function printResults(planets, type) {
        console.log(`${type}ed planets: ${planets.length}`);
        if (planets.length) {
            planets
                .sort((a, b) => a.localeCompare(b))
                .forEach((planet) => console.log(`-> ${planet}`));
        }
    }

    function decryptLine(line, key) {
        let decryptedLine = '';
        for (const char of line) {
            decryptedLine += String.fromCharCode(char.charCodeAt() - key);
        }
        return decryptedLine;
    }
}

decryptMessages([
    2,
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR',
]);

decryptMessages([
    3,
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR',
]);
