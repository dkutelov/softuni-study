function solve(input) {
    const numInput = input.map((el) => Number(el));
    const studentCount = numInput.shift();
    const lectureCount = numInput.shift();
    const additionalBonus = numInput.shift();
    const students = numInput;

    let maxAttendance = 0;

    for (let i = 0; i < studentCount; i++) {
        if (students[i] > maxAttendance) {
            maxAttendance = students[i];
        }
    }

    let maxBonus = 0;
    if (lectureCount > 0) {
        maxBonus = (maxAttendance / lectureCount) * (5 + additionalBonus);
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

solve(['5', '0', '30', '12', '19', '24', '16', '20']);
// solve([
//     '10',
//     '30',
//     '14',
//     '8',
//     '23',
//     '27',
//     '28',
//     '15',
//     '17',
//     '25',
//     '26',
//     '5',
//     '18',
// ]);
