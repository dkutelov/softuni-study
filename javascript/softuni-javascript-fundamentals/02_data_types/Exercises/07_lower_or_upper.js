function lowerOrUpper(ch) {
  if (ch === ch.toUpperCase()) {
    console.log('upper-case');
  } else {
    console.log('lower-case');
  }
}

function lowerOrUpper2(ch) {
  ch === ch.toUpperCase()
    ? console.log('upper-case')
    : console.log('lower-case');
}

lowerOrUpper2('L');
lowerOrUpper2('d');
