function solve(input) {
    const [sectorFlights, flightChanges, flightStatus] = input;
    const flights = sectorFlights.map((flight) => {
        const [flightNumber, destination] = flight.split(' ');
        return {
            flightNumber,
            destination,
            status: 'Ready to fly',
        };
    });

    flightChanges.forEach((flightChange) => {
        const [flightNumber, status] = flightChange.split(' ');
        flights.forEach((flight) => {
            if (flight.flightNumber === flightNumber) {
                flight.status = status;
            }
        });
    });

    const selectedFlights = flights.filter(
        (flight) => flight.status === flightStatus[0]
    );
    selectedFlights.forEach((flight) =>
        console.log({ Destination: flight.destination, Status: flight.status })
    );
}

solve([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania',
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled',
    ],
    ['Cancelled'],
]);

console.log('---');
solve([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania',
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled',
    ],
    ['Ready to fly'],
]);
