function sumDigits(number) {
  const numberString = number.toString();
  let sum = 0;
  for (let index = 0; index < numberString.length; index++) {
    const digit = Number(numberString[index]);
    sum += digit;
  }
  console.log(sum);
}

function sumDigit2(number) {
  let sum = 0;

  while (number > 0) {
    const digit = number % 10;
    sum += digit;
    number = parseInt(number / 10);
  }
  console.log(sum);
}

sumDigit2(245678);
