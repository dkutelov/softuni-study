function solve(numbers) {
    return numbers.filter((el, index) => index % 2 === 0).join(' ');
}
// also works in judge
// (numbers) => numbers.filter((el, index) => index % 2 === 0).join(' ');

const result = solve(['20','30','40']);
console.log(result);


const a = [1,2,3,4,5];

a.forEach(console.log);