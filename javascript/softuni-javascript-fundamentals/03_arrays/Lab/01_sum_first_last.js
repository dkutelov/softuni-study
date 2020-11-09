function sumFirstLastElement(numbers) {
  const lastIndex = numbers.length - 1;
  const firstNumber = Number(numbers[0]);
  const lastNumber = Number(numbers[lastIndex]);

  const sumFirstLastNumber = firstNumber + lastNumber;
  console.log(sumFirstLastNumber);
}

sumFirstLastElement(['10', '17', '22', '33']);
