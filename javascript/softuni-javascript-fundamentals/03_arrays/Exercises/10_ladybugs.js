function ladyBugs(tokens) {
  const fieldSize = tokens.shift();
  const ladybugsIndexes = tokens.shift().split(' ').map(Number);
  let field = [];

  for (let k = 0; k < fieldSize; k++) {
    field.push(0);
  }

  for (let ladyBugIndex of ladybugsIndexes) {
    if (ladyBugIndex >= 0 && ladyBugIndex < fieldSize) {
      field[ladyBugIndex] = 1;
    }
  }

  commands = tokens;

  for (let i = 0; i < commands.length; i++) {
    const args = commands[i].split(' ');
    const ladyBugIndex = Number(args[0]);
    const direction = args[1];
    let step = Number(args[2]);

    if (
      ladyBugIndex >= 0 &&
      ladyBugIndex < fieldSize &&
      field[ladyBugIndex] === 1
    ) {
      field[ladyBugIndex] = 0;
      let newIndex = ladyBugIndex;

      if (direction === 'right') {
        newIndex += step;

        while (newIndex >= 0 && newIndex < fieldSize && field[newIndex] !== 0) {
          newIndex += step;
        }
        if (newIndex < fieldSize && newIndex >= 0) {
          field[newIndex] = 1;
        }
      } else if (direction === 'left') {
        newIndex -= step;
        while (newIndex < fieldSize && newIndex >= 0 && field[newIndex] !== 0) {
          newIndex -= step;
        }
        if (newIndex >= 0 && newIndex < fieldSize) {
          field[newIndex] = 1;
        }
      }
    }
  }
  console.log(field.join(' '));
}
