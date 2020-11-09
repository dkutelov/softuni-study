function rotateArray(arr) {
  numOfRotations = Number(arr.pop());

  for (let i = 0; i < numOfRotations; i++) {
    const elementToTotate = arr.pop();
    arr.unshift(elementToTotate);
  }

  console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
