function biggestNumber(...args) {
  const numbers = args;
  let biggestNumber = numbers[0];

  for (let number of numbers) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
}

console.log(biggestNumber(-2, 7, 3));
