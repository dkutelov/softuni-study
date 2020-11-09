function isLeap(year) {
    const divBy4 = year % 4 === 0;
    const divBy100 = year % 100 === 0;
    const divBy400 = year % 400 === 0;

    if ( divBy400 || ( divBy4 && !divBy100 )) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

function isLeap2(year) {
    console.log((year % 400 === 0 || ( year % 4 === 0 && !(year % 100 === 0) )) ? 'yes' : 'no');
}

isLeap2(1984);
isLeap2(2003);
isLeap2(4);