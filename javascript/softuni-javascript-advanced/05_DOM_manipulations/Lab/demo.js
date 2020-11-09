// console.log('1');
//
// setTimeout(function () {
//     console.log('from setTimeout');
// }, 5000);
//
// console.log('2');

console.log('1');

const id = setInterval(function() {
    console.log('hello');
}, 1000);


setTimeout(function () {
    clearInterval(id);
    console.log('interval cleared')
}, 3100);

console.log('2');