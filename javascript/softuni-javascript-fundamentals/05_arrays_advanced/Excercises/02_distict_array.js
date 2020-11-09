function removeDuplicatedNumber(numArr) {
    let uniqueNumbers = [];

    numArr.forEach((number) => {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    });

    console.log(uniqueNumbers.join(' '));
}

function removeDuplicatedNumber1(numArr) {
    let uniqueNumbers = numArr.filter(
        (number, i, numbers) => !numbers.slice(0, i).includes(number)
    );

    console.log(uniqueNumbers.join(' '));
}

removeDuplicatedNumber1([7, 8, 9, 7, 2, 3, 4, 1, 2]);
