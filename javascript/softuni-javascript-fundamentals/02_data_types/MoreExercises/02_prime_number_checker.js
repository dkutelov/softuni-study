function isPrimeNumber(n) {
  let isPrime = true;
  let divider = 2;

  while (divider < n) {
    if (n % divider === 0) {
      isPrime = false;
    }
    divider++;
  }
  return isPrime;
}

console.log(isPrimeNumber(7));
console.log(isPrimeNumber(4));
