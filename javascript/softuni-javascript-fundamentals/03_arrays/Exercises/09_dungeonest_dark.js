function dungeonestDark(tokens) {
  let health = 100;
  let coins = 0;
  let isAlive = true;

  const dungeonRooms = tokens[0].split('|');

  for (let i = 0; i < dungeonRooms.length; i++) {
    const commandLine = dungeonRooms[i].split(' ');
    const command = commandLine[0];
    let value = Number(commandLine[1]);

    if (command === 'potion') {
      if (health + value > 100) {
        value = 100 - health;
        health = 100;
      } else {
        health += value;
      }
      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === 'chest') {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      const monsterName = command;
      health -= value;

      if (health > 0) {
        console.log(`You slayed ${monsterName}.`);
      } else {
        isAlive = false;
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }

  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
