function calculateCrystalFrequency(args) {
    const operations = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray'];
    const targetFrequency = args.shift();

    function setOperation(operationName) {
        let operation = null;

        switch (operationName) {
            case 'Cut':
                operation = (crystal) => crystal / 4;
                break;
            case 'Lap':
                operation = (crystal) => crystal * 0.8;
                break;
            case 'Grind':
                operation = (crystal) => crystal - 20;
                break;
            case 'Etch':
                operation = (crystal) => crystal - 2;
                break;
            default:
                break;
        }

        return operation;
    }

    function processCrystal(crystalFrequency) {
        let result = `Processing chunk ${crystalFrequency} microns\n`;

        function executeOperation(operationName) {
            let count = 0;
            const operation = setOperation(operationName);

            while (operation(crystalFrequency) >= targetFrequency - 1) {
                crystalFrequency = Math.floor(operation(crystalFrequency));
                count++;
            }
            if (count) {
                result += `${operationName} x${count}\nTransporting and washing\n`;
            }

            return crystalFrequency;
        }

        function performOperation(operationName, crystalFrequency) {
            if (operationName !== 'X-ray') {
                crystalFrequency = executeOperation(operationName);
            } else {
                if (crystalFrequency < targetFrequency) {
                    result += 'X-ray x1\n';
                    crystalFrequency++;
                }
            }

            return crystalFrequency;
        }

        for (const operationName of operations) {
            crystalFrequency = performOperation(
                operationName,
                crystalFrequency
            );
        }

        console.log(`${result}Finished crystal ${crystalFrequency} microns`);
    }

    for (let crystalFrequency of args) {
        processCrystal(crystalFrequency);
    }
}

calculateCrystalFrequency([1000, 4000, 8100]);
