function findSpecialNumbers(number) {
  function isSpecial(n) {
    let digitsSum = 0;
    while (n > 0) {
      digitsSum += n % 10;
      n = Math.trunc(n / 10);
    }
    return digitsSum === 5 || digitsSum === 7 || digitsSum === 11;
  }

  for (let i = 1; i <= number; i++) {
    console.log(`${i} -> ${isSpecial(i) ? `True` : `False`}`);
  }
}

findSpecialNumbers(15);
