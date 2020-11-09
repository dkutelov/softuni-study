function repeatString(text, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += text;
  }
  return result;
}

function repeatString1(text, n) {
  return text.repeat(n);
}

console.log(repeatString1('abc', 3));
