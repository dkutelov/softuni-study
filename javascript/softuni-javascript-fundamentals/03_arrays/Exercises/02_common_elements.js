function commonElements(arr1, arr2) {
  for (let element1 of arr1) {
    for (let element2 of arr2) {
      if (element1 === element2) {
        console.log(element1);
      }
    }
  }
}

commonElements(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
  ['s', 'o', 'c', 'i', 'a', 'l']
);
