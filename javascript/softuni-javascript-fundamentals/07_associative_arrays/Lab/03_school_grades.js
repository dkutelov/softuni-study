function solve(params) {
    let schoolGrades = new Map();

    params.forEach((personString) => {
        const person = personString.split(' ');
        const personName = person.shift();
        let grades = person.map(Number);

        if (!schoolGrades.has(personName)) {
            schoolGrades.set(personName, []);
        }

        const updatedGrades = schoolGrades.get(personName).concat(grades);
        schoolGrades.set(personName, updatedGrades);
    });

    let sorted = Array.from(schoolGrades.entries()).sort(
        (a, b) => getAvg(a[1]) - getAvg(b[1])
    );

    for (const person of sorted) {
        console.log(`${person[0]}: ${person[1].join(', ')}`);
    }

    function getAvg(xArrey) {
        return xArrey.reduce((curr, acc) => curr + acc, 0) / xArrey.length;
    }
}

solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
