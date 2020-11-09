function loadingBar(number) {
  function getProgressBar(number) {
    const percentSigns = number / 10;
    return `[${'%'.repeat(percentSigns)}${'.'.repeat(10 - percentSigns)}]`;
  }
  if (number === 100) {
    console.log('100% Complete!');
    console.log(getProgressBar(number));
  } else {
    console.log(`${number}% ${getProgressBar(number)}`);
    console.log('Still loading...');
  }
}

loadingBar(30);
loadingBar(100);
