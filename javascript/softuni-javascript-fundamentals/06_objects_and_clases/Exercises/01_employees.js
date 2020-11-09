function solve(names) {
    let employees = {};

    names.forEach((name) => (employees[name] = name.length));

    for (const name in employees) {
        if (employees.hasOwnProperty(name)) {
            console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
        }
    }
}

function solveArray(names) {
    const employees = names.map((name) => {
        return { name, personalNumber: name.length };
    });

    employees.forEach((employee) =>
        console.log(
            `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
        )
    );
}

solveArray([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
