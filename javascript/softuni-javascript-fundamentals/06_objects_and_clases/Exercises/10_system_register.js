function solve(input) {
    const register = {};

    input.forEach((line) => {
        const [system, component, subcomponent] = line.split(' | ');

        if (!register[system]) {
            register[system] = [];
        }

        const currentComponent = register[system].find(
            (comp) => Object.keys(comp)[0] === component
        );

        if (!currentComponent) {
            register[system].push({
                [component]: [subcomponent],
            });
        } else {
            currentComponent[component].push(subcomponent);
        }
    });

    const sorted_systems = Object.keys(register).sort((a, b) => {
        if (register[a].length > register[b].length) {
            return -1;
        } else if (register[a].length === register[b].length) {
            return a.localeCompare(b);
        } else {
            return 1;
        }
    });

    sorted_systems.forEach((sys) => {
        console.log(sys);

        const currentSystem = register[sys].slice();
        currentSystem.sort(
            (a, b) => Object.values(b)[0].length - Object.values(a)[0].length
        );
        currentSystem.forEach((comp) => {
            const compName = Object.keys(comp)[0];
            console.log(`|||${compName}`);
            comp[compName].forEach((subComp) =>
                console.log(`||||||${subComp}`)
            );
        });
    });
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
]);
