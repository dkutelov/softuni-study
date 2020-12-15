function solveClasses() {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.problems = [];
        }

        toString() {
            return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
        }
    }

    class Teacher extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName);
        }
        createProblem(id, difficulty) {
            this.problems.push({ id, difficulty });
        }
        getProblems() {
            return this.problems;
        }
        showProblemSolution(id) {
            const currentProblem = this.problems.find(
                (problem) => problem.id === id
            );
            if (!currentProblem) {
                throw new Error(`Problem with id ${id} not found.`);
            }

            currentProblem.difficulty -= 1;
            return currentProblem;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, graduationCredits, problems) {
            super(firstName, lastName);
            this.graduationCredits = graduationCredits;
            this.myCredits = 0;
            this.solvedProblems = [];
            this.problems = problems;
        }

        solveProblem(id) {
            const currentProblem = this.problems.find(
                (problem) => problem.id === id
            );

            if (!currentProblem) {
                throw new Error(`Problem with id ${id} not found.`);
            }

            const problemSolved = this.solvedProblems.find(
                (problem) => problem.id === id
            );

            if (!problemSolved) {
                this.myCredits += currentProblem.difficulty;
                this.solvedProblems.push(currentProblem);
            }

            return this.myCredits;
        }

        graduate() {
            if (this.myCredits >= this.graduationCredits) {
                return `${this.firstName} ${this.lastName} has graduated succesfully.`;
            } else {
                return `${this.firstName} ${this.lastName}, you need ${
                    this.graduationCredits - this.myCredits
                } credits to graduate.`;
            }
        }
    }
    return {
        Person,
        Teacher,
        Student,
    };
}

const classes = solveClasses();
const student = new classes.Student('Pesho', 'Petrov', 23, [
    { id: '111', difficulty: 5 },
    { id: '222', difficulty: 15 },
]);

student.solveProblem('111');
console.log(student.myCredits);
console.log(student.graduate());

student.solveProblem('222');
console.log(student.solvedProblems);
console.log(student.graduate());
