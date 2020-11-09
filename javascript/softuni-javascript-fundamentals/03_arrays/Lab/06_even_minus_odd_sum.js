function evenMinusOddSum(numbers) {
  let evenSum = 0;
  let oddSum = 0;
  for (let number of numbers) {
    number % 2 === 0 ? (evenSum += number) : (oddSum += number);

    // if (number % 2 === 0) {
    //   evenSum += number;
    // } else {
    //   oddSum += number;
    // }
  }
  console.log(evenSum - oddSum);
}

evenMinusOddSum([1, 2, 3, 4, 5, 6]);
