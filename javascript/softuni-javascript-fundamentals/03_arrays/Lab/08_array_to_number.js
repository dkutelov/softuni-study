function arrayToNumber(numbers) {
  const numbersLength = numbers.length;

  if (numbersLength === 1) {
    console.log(numbers[0]);
    return;
  }

  let condensed = [];
  for (let i = 0; i < numbersLength - 1; i++) {
    condensed.push(numbers[i] + numbers[i + 1]);
  }

  return arrayToNumber(condensed);
}

function arrayToNumber1(numbers) {
  let condensed = numbers;

  while (condensed.length > 1) {
    let tempCondensed = [];
    for (let i = 0; i < condensed.length - 1; i++) {
      tempCondensed.push(condensed[i] + condensed[i + 1]);
    }
    condensed = [...tempCondensed];
  }

  console.log(condensed[0]);
}

arrayToNumber1([2, 10, 3]);
arrayToNumber1([5, 0, 4, 1, 2]);
arrayToNumber1([1]);
