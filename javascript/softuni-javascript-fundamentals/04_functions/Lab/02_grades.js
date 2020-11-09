function grades(grade) {
  let message = '';
  if (2 <= grade && grade <= 2.99) {
    message = 'Fail';
  } else if (3 <= grade && grade <= 3.49) {
    message = 'Poor';
  } else if (3.5 <= grade && grade <= 4.49) {
    message = 'Good';
  } else if (4.5 <= grade && grade <= 5.49) {
    message = 'Very good';
  } else if (5.5 <= grade && grade <= 6) {
    message = 'Excellent';
  }
  return message;
}

console.log(grades(3.33));
