function equalArrays(firstArray, secondArray) {
  let areIdentical = true;
  let sum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      areIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else {
      sum += Number(firstArray[i]);
    }
  }

  if (areIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);
