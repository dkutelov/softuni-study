function printAndSum(start, end) {
  let sum = 0;
  let numbers = '';
  for (let i = start; i <= end; i++) {
    numbers += `${i} `;
    sum += i;
  }
  console.log(numbers.trim());
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
