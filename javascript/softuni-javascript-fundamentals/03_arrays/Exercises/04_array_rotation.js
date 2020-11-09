// function rotateArray(arr, times) {
//   const resultArray = [...arr];
//   for (let index = 0; index < times; index++) {
//     const rotatedElement = resultArray.shift();
//     resultArray.push(rotatedElement);
//   }
//   console.log(resultArray.join(' '));
// }

function rotateArray(arr, times) {
  const rotateTimes = times % arr.length;
  let resultArray = [];

  for (let i = rotateTimes; i < arr.length; i++) {
    resultArray.push(arr[i]);
  }

  for (let i = 0; i < rotateTimes; i++) {
    resultArray.push(arr[i]);
  }

  console.log(resultArray.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
