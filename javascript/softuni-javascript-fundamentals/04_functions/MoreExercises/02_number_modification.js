function numberModification(number) {
  function getDigits(n) {
    let digits = [];
    while (n) {
      const digit = n % 10;
      digits.push(digit);
      n = parseInt(n / 10);
    }
    return digits.reverse();
  }

  function getDigitsAverage(digits) {
    const digitsSum = digits.reduce(
      (prevVal, currentVal) => prevVal + currentVal,
      0
    );
    const avg = digitsSum / digits.length;
    return avg;
  }

  let digits = getDigits(number);

  while (getDigitsAverage(digits) <= 5) {
    digits.push(9);
  }
  console.log(digits.join(''));
}

//numberModification(101);
numberModification(5835);
