function solve(input) {
    let houses = input.shift().split('@').map(Number);
    let houseIndex = 0;
    const housesCount = houses.length;

    command = input.shift();
    while (command !== 'Love!') {
        let step = Number(command.split(' ')[1]);

        houseIndex += step;

        if (houseIndex >= housesCount) {
            houseIndex = 0;
        }

        if (houses[houseIndex] <= 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        } else {
            houses[houseIndex] -= 2;

            if (houses[houseIndex] <= 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }
        }
        command = input.shift();
    }

    console.log(`Cupid's last position was ${houseIndex}.`);
    const failedCount = houses.filter((x) => x > 0);

    if (failedCount.length) {
        console.log(`Cupid has failed ${failedCount.length} places.`);
    } else {
        console.log('Mission was successful.');
    }
}

//solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
solve(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);
