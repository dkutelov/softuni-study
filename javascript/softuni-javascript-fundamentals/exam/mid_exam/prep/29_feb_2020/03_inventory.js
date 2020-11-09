function solve(input) {
    let items = input.shift().split(', ');

    input.forEach((element) => {
        const [command, item] = element.split(' - ');

        switch (command) {
            case 'Collect':
                // !itmes.includes(item)
                if (itemIdx(item) === -1) {
                    items.push(item);
                }
                break;
            case 'Drop':
                // indexOf
                // items.splice()
                items = items.filter((x) => x !== item);
                break;
            case 'Combine Items':
                const [oldItem, newItem] = item.split(':');
                const idx = itemIdx(oldItem);
                if (idx > -1) {
                    items.splice(idx + 1, 0, newItem);
                }
                break;
            case 'Renew':
                const i = itemIdx(item);
                if (i > -1) {
                    const currrentItem = items.splice(i, 1);
                    items.push(currrentItem[0]);
                }
                break;
            case 'Craft!':
                console.log(items.join(', '));
                break;
        }
    });

    function itemIdx(item) {
        return items.indexOf(item);
    }
}

solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!',
]);
