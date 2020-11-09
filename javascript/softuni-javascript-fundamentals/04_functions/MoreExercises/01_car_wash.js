function carWash(commands) {
    let result = 0;

    function adjustValue(command, result) {
        switch (command) {
            case 'soap':
                result += 10;
                break;
            case 'water':
                result *= 1.2;
                break;
            case 'vacuum cleaner':
                result *= 1.25;
                break;
            case 'mud':
                result *= 0.9;
                break;
            default:
                break;
        }
        return result;
    }

    for (const command of commands) {
        result = adjustValue(command, result);
    }

    return `The car is ${result.toFixed(2)}% clean.`;
}

let res = carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
console.log(res);
