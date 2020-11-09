function sumFirstLast(numbersInput) {
    const firstNumber = numbersInput.shift();
    const lastNumber = numbersInput.pop();

    return Number(firstNumber) + Number(lastNumber);
}

const res = sumFirstLast(['20', '30', '40']);
console.log(res);
