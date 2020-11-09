function factorialDevision(firstNumber, secondNumber) {
  function calculateFactorial(number) {
    if (number === 1) {
      return 1;
    }
    return number * calculateFactorial(number - 1);
  }

  const factorialFirstNumber = calculateFactorial(firstNumber);
  const factorialSecondNumber = calculateFactorial(secondNumber);

  const result = factorialFirstNumber / factorialSecondNumber;

  console.log(result.toFixed(2));
}

factorialDevision(6, 2);
