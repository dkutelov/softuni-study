function solve(...args) {
    const paramsQuantity = new Map();

    function typeHandler(currentParam) {
        let currentType = typeof currentParam;

        if (!paramsQuantity.has(currentType)) {
            paramsQuantity.set(currentType, 0);
        }
        paramsQuantity.set(currentType,  paramsQuantity.get(currentType) + 1);
        console.log(`${currentType}: ${currentParam}`);
    }

    args.forEach(typeHandler);

    const  keysType =  paramsQuantity.keys();
    const sortedByQuantity = Array.from(keysType).sort((a,b) => paramsQuantity.get(b) - paramsQuantity.get(a));
    sortedByQuantity.forEach(type => console.log(`${type} = ${paramsQuantity.get(type)}`));
}

solve('cat', 42, function () { console.log('Hello world!');});



