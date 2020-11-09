function trackPartyGuests(tokens) {
    let guests = [];

    const guestExists = (guest) =>
        guests.find((currentGuest) => currentGuest === guest);
    const removeGuest = (guest, guests) =>
        guests.filter((currentGues) => currentGues !== guest);
    const printFinalGuestList = (guests) => {
        for (const guest of guests) {
            console.log(guest);
        }
    };

    for (let token of tokens) {
        token = token.split(' ');
        const guestName = token[0];
        const isGoing = token[1] !== 'not';

        if (isGoing) {
            if (guestExists(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guests.push(guestName);
            }
        } else {
            if (guestExists(guestName)) {
                guests = removeGuest(guestName, guests);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }

    printFinalGuestList(guests);
}

function trackPartyGuests1(input) {
    let guests = [];

    for (let infoLine of input) {
        let info = infoLine.split(' ');
        let name = info[0];

        if (!info.includes('not')) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                guests = guests.filter((guestName) => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}

trackPartyGuests1([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!',
]);
