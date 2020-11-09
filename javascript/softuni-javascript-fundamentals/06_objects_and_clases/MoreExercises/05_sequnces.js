function sequences(input) {
    const uniqueArrays = [];

    input.forEach((element) => {
        const currentArray = JSON.parse(element);
        currentArray.sort((a, b) => b - a);

        if (
            uniqueArrays.length === 0 ||
            !inUniqueArrays(currentArray, uniqueArrays)
        ) {
            uniqueArrays.push(currentArray);
        }
    });

    uniqueArrays.sort((a, b) => a.length - b.length);
    uniqueArrays.forEach((uniqueArray) =>
        console.log(`[${uniqueArray.join(', ')}]`)
    );

    function compareTwoSortedArr(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    function inUniqueArrays(currentArray, uniqueArrays) {
        let isInUniqueArrays = false;
        uniqueArrays.forEach((uniqueArray) => {
            if (compareTwoSortedArr(currentArray, uniqueArray)) {
                isInUniqueArrays = true;
            }
        });
        return isInUniqueArrays;
    }
}

sequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]',
]);

sequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
]);
