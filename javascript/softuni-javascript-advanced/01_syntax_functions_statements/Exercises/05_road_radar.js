function solve(params) {
    const [speed, location] = params
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    const currentLimit = limits[location];

    if (speed <= currentLimit) return;

    const overSpeed = speed - currentLimit;

    let message = 'speeding'
    if (overSpeed > 20 && overSpeed <= 40 ) {
        message = 'excessive speeding'
    } else if (overSpeed > 40 ) {
        message = 'reckless driving'
    }

    console.log(message);
}


solve([40, 'city'])
solve([21, 'residential'])
solve([120, 'interstate'])
solve([200, 'motorway'])