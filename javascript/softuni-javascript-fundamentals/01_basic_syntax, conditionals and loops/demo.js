let a = '5';

a == 5; // True
a === 5; // False

if (a >= 5) {
  console.log('is true');
} else if (a <= 2) {
  console.log('2');
} else {
  console.log('is false');
}

// while (condition) {}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
