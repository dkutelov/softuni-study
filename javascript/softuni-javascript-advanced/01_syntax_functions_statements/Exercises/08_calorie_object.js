function solve(params) {
    const food = {};

    for (let i = 0; i < params.length; i+= 2) {
        food[params[i]] = Number(params[i+1]);
    }

    console.log(food);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])