console.log('start');

setTimeout(() => {
    console.log(Date.now());
    console.log('one');
}, 2);

setTimeout(() => {
    console.log(Date.now());
    console.log('two');
}, 2);
const start = Date.now();

console.log(start);

for (let i = 0; i < 6; i++) {
    console.log(`console log ${i}`)
}

const end = Date.now() - start;
console.log(end);