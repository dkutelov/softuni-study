const data = ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'];
const sortingCriteria = 'destination';


((data, sortingCriteria) => {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    data.forEach( ticketData => {
        let [destination, price, status] = ticketData.split('|');
        const currentTicket = new Ticket(destination, Number(price), status);
        tickets.push(currentTicket);
    });

    return tickets.sort( (a,b) => {
        if (sortingCriteria === 'price') {
            return a[sortingCriteria] - b[sortingCriteria]
        } else {
            return a[sortingCriteria].localeCompare(b[sortingCriteria]);
        }
    });
})(data, sortingCriteria);

