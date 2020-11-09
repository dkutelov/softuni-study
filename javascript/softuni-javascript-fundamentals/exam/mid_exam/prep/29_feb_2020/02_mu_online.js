function solve(input) {
    let health = 100;
    let bitcoins = 0;
    let wasKilled = false;

    const rooms = input.split('|');

    for (let idx = 0; idx < rooms.length; idx++) {
        const [command, numberString] = rooms[idx].split(' ');
        const num = Number(numberString);

        if (command === 'potion') {
            let healedAmount = num;
            if (health + num >= 100) {
                healedAmount = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${healedAmount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            console.log(`You found ${num} bitcoins.`);
            bitcoins += num;
        } else {
            health -= num;
            const monster = command;
            if (health <= 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${idx + 1}`);
                wasKilled = true;
                break;
            } else {
                console.log(`You slayed ${monster}.`);
            }
        }
    }

    if (!wasKilled) {
        console.log(
            `You\'ve made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`
        );
    }
}

solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
