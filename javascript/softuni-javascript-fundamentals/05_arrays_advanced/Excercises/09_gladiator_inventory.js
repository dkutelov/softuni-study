function gladiatorInventory(params) {
    let inventory = params.shift().split(' ');

    const commands = params;
    let item = null;
    for (let command of commands) {
        command = command.split(' ');
        const commandName = command.shift();

        let operation = null;
        switch (commandName) {
            case 'Buy':
                operation = (args) => {
                    item = args[0];
                    if (inventory.indexOf(item) < 0) {
                        inventory.push(item);
                    }
                };
                break;
            case 'Trash':
                operation = (args) => {
                    item = args[0];
                    inventory = removeItemByName(item);
                };
                break;
            case 'Repair':
                operation = (args) => {
                    item = args[0];
                    inventory = removeItemByName(item);
                    inventory.push(item);
                };
                break;
            case 'Upgrade':
                operation = (args) => {
                    const [upgradeItem, upgrade] = args[0].split('-');
                    const idx = inventory.indexOf(upgradeItem);
                    if (idx >= 0) {
                        inventory.splice(
                            idx + 1,
                            0,
                            `${upgradeItem}:${upgrade}`
                        );
                    }
                };
                break;
            default:
                break;
        }
        operation(command);
    }

    function removeItemByName(item) {
        return inventory.filter((inventoryItem) => inventoryItem !== item);
    }

    console.log(inventory.join(' '));
}

// gladiatorInventory([
//     'SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel',
// ]);

gladiatorInventory([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V',
]);
