function getStudentList(input) {
    const newStudents = getStudents(input);
    const grades = getSortedGrades(newStudents);
    getOutputByGrade(grades);

    function getStudents(input) {
        const nextYearStudents = [];
        input.forEach((studentString) => {
            let [nameString, gradeString, scoreString] = studentString.split(
                ', '
            );
            const name = nameString.split(': ')[1];
            const grade = Number(gradeString.split(': ')[1]) + 1;
            const score = parseFloat(scoreString.split(': ')[1]);

            if (score >= 3) {
                nextYearStudents.push({
                    name,
                    grade,
                    score,
                });
            }
        });

        return nextYearStudents;
    }

    function getSortedGrades(newStudents) {
        const grades = newStudents
            .map((student) => student.grade)
            .filter((grade, i, arr) => arr.indexOf(grade) === i);

        grades.sort((a, b) => a - b);
        return grades;
    }

    function printGrade(grade, studentsNames, avgScore) {
        console.log(`${grade} Grade `);
        console.log(`List of students: ${studentsNames.join(', ')}`);
        console.log(
            `Average annual grade from last year: ${avgScore.toFixed(2)}`
        );
        console.log();
    }

    function getOutputByGrade() {
        grades.forEach((grade) => {
            const students = newStudents.filter(
                (student) => student.grade === grade
            );
            const studentsNames = students.map((student) => student.name);
            const avgScore =
                students.reduce(
                    (preVal, currVal) => preVal + currVal.score,
                    0
                ) / students.length;

            printGrade(grade, studentsNames, avgScore);
        });
    }
}

getStudentList([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
