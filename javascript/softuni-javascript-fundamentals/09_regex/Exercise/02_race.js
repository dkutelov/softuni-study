function solve(input) {
    racers = {};
    names = input.shift().split(', ');
    names.forEach((racer) => {
        racers[racer] = 0;
    });

    const results = input;
    for (const resultData of results) {
        if (resultData === 'end of race') {
            sorted_racers = Object.entries(racers).sort((a, b) => b[1] - a[1]);
            let count = 1;
            const endings = { 1: 'st', 2: 'nd', 3: 'rd' };
            while (count <= sorted_racers.length && count <= 3) {
                console.log(
                    `${count}${endings[count]} place: ${
                        sorted_racers[count - 1][0]
                    }`
                );
                count++;
            }

            break;
        }

        const letters = Array.from(resultData.matchAll(/[A-Za-z]/g));
        const racerName = letters.join('');

        if (names.includes(racerName)) {
            const nums = Array.from(resultData.matchAll(/\d/g));
            const distance = nums.reduce(
                (prev, curr) => (prev += Number(curr)),
                0
            );
            racers[racerName] += distance;
        }
    }
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
]);
