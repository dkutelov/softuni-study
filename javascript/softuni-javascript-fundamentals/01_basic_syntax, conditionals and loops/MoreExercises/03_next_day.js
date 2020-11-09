function getNextDay(year, month, day) {
    const nextDay = new Date(year, month -= 1, day += 1);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`);
}

getNextDay(2016, 9, 30);
