class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (this.kids[grade]) {
            const kid = this.kids[grade].find((x) => x.includes(name));
            if (kid) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        } else {
            this.kids[grade] = [];
        }
        this.kids[grade].push(`${name}-${budget}`);

        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (this.kids[grade]) {
            if (!this.kids[grade].find((x) => x.includes(name))) {
                return `We couldn't find ${name} in ${grade} grade.`;
            } else {
                this.kids[grade] = this.kids[grade].filter(
                    (x) => !x.includes(name)
                );
                return this.kids[grade];
            }
        } else {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
    }

    numberOfChildren() {
        let count = 0;
        Object.keys(this.kids).forEach((grade) => {
            count += this.kids[grade].length;
        });
        return count;
    }

    toString() {
        if (this.numberOfChildren() === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        let message = `${
            this.organizer
        } will take ${this.numberOfChildren()} children on trip to ${
            this.destination
        }\n`;

        Object.keys(this.kids)
            .sort((a, b) => a - b)
            .forEach((currentGrade) => {
                message += `Grade: ${currentGrade}\n`;
                this.kids[currentGrade].forEach((kid, i) => {
                    message += `${i + 1}. ${kid}\n`;
                });
                message += '\n';
            });
        return message;
    }
}

// const kids = {
//     5: ['gosho--100', 'pesho-120']
// }
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);
console.log(vacation.toString());
