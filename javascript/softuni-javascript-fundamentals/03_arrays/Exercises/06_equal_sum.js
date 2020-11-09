function equalSum(arr) {
  let indexEqualSum = null;
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((acc, el) => acc + el, 0);
    const rightSum = arr.slice(i + 1).reduce((acc, el) => acc + el, 0);
    if (leftSum === rightSum) {
      indexEqualSum = i;
    }
  }
  if (indexEqualSum !== null) {
    console.log(indexEqualSum);
  } else {
    console.log('no');
  }
}

equalSum([1]);
