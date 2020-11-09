function addOrSubstract(numbers) {
  const result = [];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      result.push(numbers[index] + index);
    } else {
      result.push(numbers[index] - index);
    }
  }
  console.log(result);
  const numbersSum = numbers.reduce((acc, el) => acc + el, 0);
  console.log(numbersSum);
  const resultSum = result.reduce((acc, el) => acc + el, 0);
  console.log(resultSum);
}

addOrSubstract([5, 15, 23, 56, 35]);
