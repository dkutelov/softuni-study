function integerOrFloat(firstNumber, secondNumber, thirdNumber) {
  const sum = firstNumber + secondNumber + thirdNumber;
  let sumType = 'Float';
  if (sum === parseInt(sum)) {
    sumType = 'Integer';
  }
  console.log(`${sum} - ${sumType}`);
}

function integerOrFloat2(firstNumber, secondNumber, thirdNumber) {
  let sum = firstNumber + secondNumber + thirdNumber;
  sum % 1 === 0 ? (sum += ' - Integer') : (sum += ' - Float');
  console.log(sum);
}

integerOrFloat2(100, 200, 303);
