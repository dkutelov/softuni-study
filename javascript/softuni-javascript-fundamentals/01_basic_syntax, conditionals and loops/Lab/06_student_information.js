function printStudentInformation(name, age, avg_grade) {
  const message = `Name: ${name}, Age: ${age}, Grade: ${avg_grade.toFixed(2)}`;
  console.log(message);
}

printStudentInformation('John', 15, 5.54678);
