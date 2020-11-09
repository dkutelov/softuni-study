function perfectNumber(number) {
  const dividors = [1];

  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      dividors.push(i);
    }
  }

  const dividorsSum = dividors.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    0
  );

  if (number === dividorsSum) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
