function guestsNotComing(params) {
    const partyIndex = params.indexOf('PARTY');
    const guestList = params.slice(0, partyIndex);
    const comingGuests = params.slice(partyIndex + 1);
    const reservationList = generateReservationList(guestList);

    comingGuests.forEach((guest) => {
        let status = isVip(guest);

        if (status && reservationList.vip.includes(guest)) {
            reservationList.vip.splice(reservationList.vip.indexOf(guest), 1);
        }

        if (!status && reservationList.regular.includes(guest)) {
            reservationList.regular.splice(
                reservationList.regular.indexOf(guest),
                1
            );
        }
    });

    function generateReservationList(guests) {
        let obj = {
            vip: [],
            regular: [],
        };

        guests.forEach((guest) => {
            if (isVip(guest)) {
                obj.vip.push(guest);
            } else {
                obj.regular.push(guest);
            }
        });

        return obj;
    }

    function isVip(guest) {
        return !isNaN(Number(guest[0]));
    }

    console.log(reservationList.vip.length + reservationList.regular.length);
    if (reservationList.vip.length > 0) {
        console.log(reservationList.vip.join('\n'));
    }
    if (reservationList.regular.length > 0) {
        console.log(reservationList.regular.join('\n'));
    }
}

guestsNotComing([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
]);

guestsNotComing([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
]);
