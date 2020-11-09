function amazingNumberStringSolution(numberInput) {
  let numberAsText = numberInput.toString();
  let sum = 0;

  for (let i = 0; i < numberAsText.length; i++) {
    sum += Number(numberAsText[i]);
  }

  const isAmazing = sum.toString().includes('9');

  console.log(
    `${numberInput} ${isAmazing ? `Amazing? True` : `Amazing? False`}`
  );
}

function amazingNumber(numberInput) {
  let number = numberInput;
  let sum = 0;
  let isAmazing = false;

  while (number > 0) {
    sum += number % 10;
    //number = Math.trunc(number / 10);
    number = parseInt(number / 10);
  }

  while (sum > 0) {
    if (sum % 10 === 9) {
      isAmazing = true;
      break;
    }
    sum = parseInt(number / 10);
  }

  console.log(`${numberInput} Amazing? ${isAmazing ? 'True' : 'False'}`);
}

amazingNumberStringSolution(1233);
