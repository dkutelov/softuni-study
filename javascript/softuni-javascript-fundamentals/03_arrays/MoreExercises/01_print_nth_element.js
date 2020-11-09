function printNthElement(arr) {
  n = Number(arr.pop());
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  console.log(result.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
