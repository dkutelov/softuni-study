const data = [
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
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
];


((data) => {
    const components = {};

    data.forEach(dataLine => {
        const [systemName, componentName, subcomponentName] = dataLine.split(' | ');

        if (!components[systemName]) {
            components[systemName] = {};
        }

        if (!components[systemName][componentName]) {
            components[systemName][componentName] = []
        }

        components[systemName][componentName].push(subcomponentName);
    });

    Object.keys(components).sort( (a, b) =>
        Object.keys(components[b]).length - Object.keys(components[a]).length || a.localeCompare(b)
    ).forEach(system => {
        console.log(system);
        Object.entries(components[system]).sort((a,b) =>
            b[1].length - a[1].length
        ).forEach( componentData => {
            const [componentName, subcomponents] = componentData;
            console.log(`|||${componentName}`);
            subcomponents.forEach( subcompounent => console.log(`||||||${subcompounent}`));
        })
    });
})(data);