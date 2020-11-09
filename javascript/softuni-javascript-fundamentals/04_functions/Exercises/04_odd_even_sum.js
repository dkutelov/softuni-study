function oddEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    const numbers = String(number).split('');

    for (const number of numbers) {
        const currentNum = Number(number);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddEvenSum(3495892137259234));
