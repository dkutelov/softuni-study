function teamAccount(arr) {
  let games = arr.shift().split(' ');
  const commands = arr;

  for (let command of commands) {
    if (command === 'Play!') {
      break;
    } else {
      let [commandName, gameName] = command.split(' ');

      if (commandName === 'Install' && !games.includes(gameName)) {
        games.push(gameName);
      } else if (commandName === 'Uninstall') {
        games = games.filter((game) => game !== gameName);
      } else if (commandName === 'Update') {
        const updateGame = games.find((game) => game === gameName);
        if (updateGame) {
          games = games.filter((game) => game !== gameName);
          games.push(updateGame);
        }
      } else if (commandName === 'Expansion') {
        let [game, expandsion] = gameName.split('-');
        for (let i = 0; i < games.length; i++) {
          if (games[i] === game) {
            games.splice(i + 1, 0, `${games[i]}:${expandsion}`);
          }
        }
      }
    }
  }
  console.log(games.join(' '));
}

teamAccount([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);
