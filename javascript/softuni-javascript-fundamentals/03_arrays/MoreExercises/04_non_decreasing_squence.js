function nonDecreasingSequence(numbers) {
  let currentHighestNumber = numbers[0];
  let result = numbers.filter((currentNumber) => {
    if (currentNumber > currentHighestNumber) {
      currentHighestNumber = currentNumber;
    }
    return currentNumber >= currentHighestNumber;
  });
  console.log(result.join(' '));
}

nonDecreasingSequence([20, 3, 2, 15, 6, 1]);
