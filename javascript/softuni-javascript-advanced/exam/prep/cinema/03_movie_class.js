class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.profit = 0;
        this.ticketsCount = 0;
    }

    newScreening(date, hall, description) {
        const existingScreening = this.screenings.find(x => x.date === date && x.hall === hall);

        if (existingScreening) {
            const errorMessage = `Sorry, ${this.hall} hall is not available on ${this.date}`;
            throw new Error(errorMessage);
        }

        this.screenings.push({
            date,
            hall,
            description
        });
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        const currentScreening = this.screenings.find(x => x.date === date && x.hall === hall);

        if (!currentScreening) {
            const errorMessage = `Sorry, there is no such screening for ${this.movieName} movie.`;
            throw new Error(errorMessage);
        }

        const currentProfit = this.ticketPrice * soldTickets;
        this.profit += currentProfit;
        this.ticketsCount += soldTickets;

        let currentIndex = this.screenings.indexOf(currentScreening);
        this.screenings.splice(currentIndex,1);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        let message = `${this.movieName} full information:\nTotal profit: ${this.profit.toFixed(0)}$\n`;
        message += `Sold Tickets: ${this.ticketsCount}\n`;
        if (this.screenings.length === 0) {
            message +=  "No more screenings!";
            return message;
        }
        message += "Remaining film screenings:\n";
        const sortedScreenings = this.screenings.sort((a,b) => a.hall.localeCompare(b.hall));
        const screeningsText = sortedScreenings.map( ({hall, date, description}) => `${hall} - ${date} - ${description}`);
        message += screeningsText.join('\n');
        return message;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
