function getTownInfo(input) {
    const towns = input.map((inputElement) => {
        const [town, latitude, longitude] = inputElement.split(' | ');
        return {
            town,
            latitude: Number(latitude).toFixed(2).toString(),
            longitude: Number(longitude).toFixed(2).toString(),
        };
    });

    towns.forEach((town) => console.log(town));
}

getTownInfo([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625',
]);
