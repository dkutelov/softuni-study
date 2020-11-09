function smallestOfThree(num1, num2, num3) {
  let smallestNumber = 0;
  if (num1 < num2 && num1 < num3) {
    smallestNumber = num1;
  } else if (num2 < num1 && num2 < num3) {
    smallestNumber = num2;
  } else {
    smallestNumber = num3;
  }
  console.log(smallestNumber);
}

smallestOfThree(2, 5, 3);
smallestOfThree(600, 342, 123);
smallestOfThree(25, 21, 4);
