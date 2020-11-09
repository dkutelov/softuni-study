function reverseStringArray(stringArray) {
  const arrLength = stringArray.length;
  const halfLength = Math.floor(arrLength / 2);

  for (let i = 0; i <= halfLength; i++) {
    const currentElement = stringArray[i];
    stringArray[i] = stringArray[arrLength - i];
    stringArray[arrLength - i] = currentElement;
  }

  console.log(stringArray.join(' '));
}

reverseStringArray(['a', 'b', 'c', 'd', 'e']);
reverseStringArray(['abc', 'def', 'hig', 'klm', 'nop']);
