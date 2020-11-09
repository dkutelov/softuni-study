function maxSecquence(arr) {
  let maxSecquenceCount = 0;
  let equalSequenceCount = 0;
  let countIndex = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      equalSequenceCount++;

      if (equalSequenceCount > maxSecquenceCount) {
        maxSecquenceCount = equalSequenceCount;
        countIndex = i;
      }
    } else {
      equalSequenceCount = 0;
    }
  }

  let result = [];
  for (let j = countIndex - (maxSecquenceCount - 1); j < countIndex + 2; j++) {
    result.push(arr[j]);
  }

  console.log(result.join(' '));
}

maxSecquence([1, 1, 1, 2, 3, 1, 3, 3]);
