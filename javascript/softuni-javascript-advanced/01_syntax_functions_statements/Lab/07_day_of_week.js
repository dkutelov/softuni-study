function solve(day) {
    day = day.toLowerCase();

    const weekDays = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7,
    };

    if (!Object.keys(weekDays).includes(day)) {
        console.log('error');
        return;
    }

    console.log(weekDays[day]);
}

solve('Monday');
solve('QWERTY');
