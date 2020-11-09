function solution() {
    const ingredients = {
        protein : 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: [{ingredient: 'carbohydrate', quantity: 1}, {ingredient: 'flavour', quantity: 2}],
        lemonade: [{ingredient: 'carbohydrate', quantity: 10}, {ingredient: 'flavour', quantity: 20}],
        burger: [{ingredient: 'carbohydrate', quantity: 5}, {ingredient: 'fat', quantity: 7},
            {ingredient: 'flavour', quantity: 3}],
        eggs: [{ingredient: 'protein', quantity: 5}, {ingredient: 'fat', quantity: 1},
            {ingredient: 'flavour', quantity: 1}],
        turkey: [{ingredient: 'protein', quantity: 10}, {ingredient: 'carbohydrate', quantity: 10},
            {ingredient: 'fat', quantity: 10}, {ingredient: 'flavour', quantity: 10}],
    };

    function restockIngredients(ingredient, quantity) {
        ingredients[ingredient] += quantity;
    }

    function checkIngredientsAvailability(product, quantity) {
        const currentRecipe = recipes[product];
        for (let element of currentRecipe) {
           const currentQuantity = quantity * element.quantity;
           const currentIngredient = element.ingredient;
           if (currentQuantity > ingredients[currentIngredient]) {
               return `Error: not enough ${currentIngredient} in stock`
           }
        }
    }

    function prepareProducts(product, quantity) {
        const currentRecipe = recipes[product];
        currentRecipe.forEach(element => {
            const currentQuantity = quantity * element.quantity;
            const currentIngredient = element.ingredient;
            ingredients[currentIngredient] -= currentQuantity;
        });
    }

    return function(input) {
        let [operation, firstArgument, secondArgument] = input.split(' ');
        secondArgument = Number(secondArgument);
        let message = 'Success';

        if (operation === 'restock') {
            restockIngredients(firstArgument, secondArgument);
        } else if (operation === 'prepare') {
            const product = firstArgument;
            const quantity = secondArgument;
            const notEnoughMaterials = checkIngredientsAvailability(product, quantity);
            if (notEnoughMaterials) {
                message = notEnoughMaterials;
            } else {
                prepareProducts(product, quantity);
            }
        } else if (operation === 'report') {
            message = `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} `;
            message += `fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
        return message;
    }
}

let manager = solution();
// manager("restock carbohydrate 10");
// manager("restock flavour 10");
// manager("prepare apple 1");
// manager("restock fat 10");
// manager("prepare burger 1");

manager("prepare turkey 1");
manager("restock protein 10");
manager("prepare turkey 1");
manager("restock carbohydrate 10");
manager("prepare turkey 1");
manager("restock fat 10");
manager("prepare turkey 1");
manager("restock flavour 10");
manager("prepare turkey 1");
manager("report");
