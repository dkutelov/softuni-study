function division(num) {
  let divisibleBy = 0;

  if (num % 10 === 0) {
    divisibleBy = 10;
  } else if (num % 7 === 0) {
    divisibleBy = 7;
  } else if (num % 6 === 0) {
    divisibleBy = 6;
  } else if (num % 3 === 0) {
    divisibleBy = 3;
  } else if (num % 2 === 0) {
    divisibleBy = 2;
  }

  if (divisibleBy) {
    console.log(`The number is divisible by ${divisibleBy}`);
  } else {
    console.log('Not divisible');
  }
}

division(30);
division(15);
division(12);
division(1643);
