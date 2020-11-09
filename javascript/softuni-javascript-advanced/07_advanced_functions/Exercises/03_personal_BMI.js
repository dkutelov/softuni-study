function solve(name, age, weight, height) {
    const person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(weight / (height/100) ** 2)
    };

    return ((person) => {
        const BMI = person.BMI;
        let status;
        if (BMI < 18.5) {
            status = 'underweight'
        } else if (BMI < 25) {
            status = 'normal';
        } else if (BMI < 30) {
            status = 'overweight';
        } else {
            status = 'obese'
        }
        person = {...person, status};

        return ((person) => {
            if (person.status === 'obese') {
                person.recommendation = 'admission required'
            }
            return person
        })(person);
    })(person);
}



const res = solve("Honey Boo Boo", 9, 57, 137);
console.log(res);