function getTopIntegers(arr) {
  const numbers = [...arr];
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];
    let isValid = true;
    for (let j = index + 1; j < arr.length; j++) {
      if (currentElement <= numbers[j]) {
        isValid = false;
      }
    }
    if (isValid) {
      result.push(currentElement);
    }
  }
  console.log(result.join(' '));
}

(arr) => {
  console.log(
    arr.filter((x, i) => arr.slice(i + 1).every((y) => x > y)).join(' ')
  );
};

getTopIntegers([14, 24, 3, 19, 15, 17]);
