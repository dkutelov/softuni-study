function charsToString(ch1, ch2, ch3) {
  console.log(`${ch1}${ch2}${ch3}`);
}

function charsToString2() {
  let text = '';
  for (let arg in arguments) {
    text += arguments[arg];
  }
  console.log(text);
}

charsToString2('a', 'b', 'c');
