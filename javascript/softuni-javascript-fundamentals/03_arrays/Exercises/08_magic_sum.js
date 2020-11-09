function magicSum(numbers, number) {
  const desiredSum = number;
  const result = [];

  while (numbers.length > 0) {
    const currentNumber = numbers.shift();

    for (let number of numbers) {
      const currentSum = currentNumber + number;
      if (currentSum === desiredSum) {
        result.push([currentNumber, number]);
      }
    }
  }

  for (let magicSum of result) {
    console.log(magicSum.join(' '));
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
