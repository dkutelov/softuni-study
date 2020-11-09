function sumEvenNumbers(numbers) {
  let evenSum = 0;
  for (let number of numbers) {
    const currentNumber = Number(number);
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    }
  }
  console.log(evenSum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
