function solve(params) {
    gladiators = {};
    for (const param of params) {
        if (param === 'Ave Cesar') {
            printGladiators(gladiators);
            break;
        }

        if (param.includes(' -> ')) {
            getGladiatorSkills(param);
        } else if (param.includes(' vs ')) {
            battleGladiators(param);
        }
    }

    function getGladiatorSkills(gladiatorData) {
        let [gladiator, skill, level] = gladiatorData.split(' -> ');
        level = Number(level);

        if (!gladiators[gladiator]) {
            gladiators[gladiator] = {};
        }

        if (gladiators[gladiator][skill]) {
            gladiators[gladiator][skill] = Math.max(
                gladiators[gladiator][skill],
                level
            );
            return;
        }
        gladiators[gladiator][skill] = level;
    }

    function battleGladiators(param) {
        const [gladiator1, gladiator2] = param.split(' vs ');
        if (gladiators[gladiator1] && gladiators[gladiator2]) {
            for (const gl1Skill in gladiators[gladiator1]) {
                for (const gl2Skill in gladiators[gladiator2]) {
                    if (gl1Skill === gl2Skill) {
                        if (
                            gladiators[gladiator1][gl1Skill] >
                            gladiators[gladiator2][gl2Skill]
                        ) {
                            delete gladiators[gladiator2];
                        } else if (
                            gladiators[gladiator1][gl1Skill] <
                            gladiators[gladiator2][gl2Skill]
                        ) {
                            delete gladiators[gladiator1];
                        }
                    }
                }
            }
        }
    }

    function printGladiators(gladiators) {
        const sorted = Object.keys(gladiators).sort((a, b) => {
            const skillsA = Object.values(gladiators[a]).reduce(
                (acc, curr) => acc + curr,
                0
            );
            const skillsB = Object.values(gladiators[b]).reduce(
                (acc, curr) => acc + curr,
                0
            );

            if (skillsA > skillsB) {
                return -1;
            } else if (skillsA === skillsB) {
                return a.localeCompare(b);
            } else {
                return 1;
            }
        });

        sorted.forEach((gladiator) => {
            const gladiatorTotalSkills = Object.values(
                gladiators[gladiator]
            ).reduce((acc, curr) => acc + curr, 0);
            console.log(`${gladiator}: ${gladiatorTotalSkills} skill`);

            const sortedSkills = Object.entries(gladiators[gladiator]).sort(
                (a, b) => {
                    if (b[1] > a[1]) {
                        return 1;
                    } else if (b[1] < a[1]) {
                        return -1;
                    } else {
                        return a[0].localeCompare(b[0]);
                    }
                }
            );
            for (let [skill, level] of sortedSkills) {
                console.log(`- ${skill} <!> ${level}`);
            }
        });
    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar',
]);
