function mergeArrays(arr1, arr2) {
  const resultArray = [];
  for (let i in arr1) {
    if (i % 2 !== 0) {
      resultArray.push(arr1[i] + arr2[i]);
    } else {
      resultArray.push(String(Number(arr1[i]) + Number(arr2[i])));
    }
  }
  console.log(resultArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
