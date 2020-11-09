function solve(firstName, lastName, age) {
    let person = { firstName, lastName, age };

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve('Peter', 'Pan', '20');
