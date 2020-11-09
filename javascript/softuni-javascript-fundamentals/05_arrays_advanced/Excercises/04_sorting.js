function sortArray(numsArr) {
    let result = [];
    sorted_array = numsArr.sort((a, b) => b - a);

    while (sorted_array.length > 1) {
        result.push(sorted_array.shift(), sorted_array.pop());
    }

    if (sorted_array.length === 1) {
        result.push(sorted_array[0]);
    }

    console.log(result.join(' '));
}

sortArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
