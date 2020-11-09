function binaryToDecimal(binaryString) {
  let decimal = 0;
  const reversedBinary = binaryString.split('').reverse().join('');
  for (let index = 0; index < reversedBinary.length; index++) {
    if (index == 0) {
      const firstDigit = parseInt(reversedBinary[index]);
      if (firstDigit === 1) {
        decimal++;
      }
    } else {
      decimal += (parseInt(reversedBinary[index]) * 2) ** index;
    }
  }
  return decimal;
}

function binaryToDecimal2(binaryString) {
  let decimal = 0;

  const firstDigit = parseInt(binaryString.slice(-1));
  if (firstDigit === 1) {
    decimal++;
  }

  for (let index = binaryString.length - 2; index >= 0; index--) {
    decimal +=
      (parseInt(binaryString[index]) * 2) ** (binaryString.length - index - 1);
  }

  return decimal;
}

console.log(binaryToDecimal2('11110000'));
