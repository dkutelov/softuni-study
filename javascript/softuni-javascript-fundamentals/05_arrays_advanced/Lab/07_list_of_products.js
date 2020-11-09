function printProductList(arr) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }
}

printProductList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
