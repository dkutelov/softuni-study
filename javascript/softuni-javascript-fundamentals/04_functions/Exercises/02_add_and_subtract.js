function addAndSubtract(num1, num2, num3) {
  function sumFirstTwo(n1, n2) {
    return n1 + n2;
  }

  function subtractTwo(n1, n2) {
    return n1 - n2;
  }

  const sumOfFirstTwo = sumFirstTwo(num1, num2);
  const result = subtractTwo(sumOfFirstTwo, num3);

  return result;
}

addAndSubtract(23, 6, 10);
