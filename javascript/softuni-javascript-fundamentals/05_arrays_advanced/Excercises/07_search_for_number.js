function searchForNumber(numbers, params) {
    const [takeNumbers, deleteNumbers, searchedNumber] = params;
    let takenNumbers = numbers.slice(deleteNumbers, takeNumbers);

    const occurances = takenNumbers.filter(
        (number) => number === searchedNumber
    );

    console.log(`Number ${searchedNumber} occurs ${occurances.length} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
