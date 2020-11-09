function solve(fruit, weight, pricePerKg) {
    weight = weight / 1000
    const totalPrice = weight * pricePerKg
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)