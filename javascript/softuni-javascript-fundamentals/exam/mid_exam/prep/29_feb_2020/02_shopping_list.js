function solve(input) {
    let shoppingList = input.shift().split('!');
    const commands = input;

    for (const command of commands) {
        if (command === 'Go Shopping!') {
            break;
        }
        shoppingList = updateShoppingList(command, shoppingList);
    }

    function updateShoppingList(command, shoppingList) {
        const arguments = command.split(' ');
        const commandName = arguments[0];
        const item = arguments[1];

        switch (commandName) {
            case 'Urgent':
                shoppingList = makeItemUrgent(item, shoppingList);
                break;
            case 'Unnecessary':
                shoppingList = removeUnnecesaryItem(item, shoppingList);
                break;
            case 'Correct':
                const oldItem = item;
                const newItem = arguments[2];
                shoppingList = correctItem(oldItem, newItem, shoppingList);
                break;
            case 'Rearrange':
                shoppingList = rearrangeItem(item, shoppingList);
                break;
        }
        return shoppingList;
    }

    function makeItemUrgent(item, items) {
        return !items.includes(item) ? [item].concat(items) : items.slice();
    }

    function removeUnnecesaryItem(item, items) {
        return items.filter((x) => x !== item);
    }

    function correctItem(oldItem, newItem, items) {
        return items.map((x) => (x === oldItem ? newItem : x));
    }

    function rearrangeItem(item, items) {
        return items.includes(item)
            ? items.filter((x) => x !== item).concat(item)
            : items.slice();
    }

    console.log(`${shoppingList.join(', ')}`);
}

solve([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!',
]);

solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!',
]);
