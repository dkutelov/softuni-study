function carMaker(requirementsObj) {
    let {model, power, color, carriage, wheelsize} = requirementsObj;

    const getEngine = power => {
        if (power <= 90) {
            return  { power: 90, volume: 1800 }
        } else  if (power <=  120) {
            return { power: 120, volume: 2400 }
        } else {
            return { power: 200, volume: 3500 }
        }
    };

    const getWheels = wheelsize => {
        wheelsize = Math.floor(wheelsize);
        wheelsize  = wheelsize % 2 === 1 ? wheelsize : wheelsize - 1;
        return Array.from({length:4}).fill(wheelsize);
    };

    return  {
        model,
        engine: getEngine(power),
        carriage: { type: carriage, color},
        wheels: getWheels(wheelsize)
    };
}

let res = carMaker({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);

console.log(res);