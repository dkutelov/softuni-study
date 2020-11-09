const text = 'Lorem Ipsum is dummy Dari';
const pattern = /(?<firstLetter>[A-Z])[a-z]+/g;

let result = pattern.exec(text);
while (result !== null) {
    console.log(result);
    result = pattern.exec(text);
}

result = pattern.exec(text);
console.log(result);
