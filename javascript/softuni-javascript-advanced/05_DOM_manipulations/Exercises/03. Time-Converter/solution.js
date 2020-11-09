function attachEventsListeners() {
    Array.from(
        document.querySelectorAll('div input[type=button]')
    ).forEach((button) => button.addEventListener('click', buttonClickHandler));

    function buttonClickHandler(e) {
        const inputValue = e.target.parentNode.children[1].value;
        const currentId = e.target.id;

        if (!inputValue) return;

        const funcObj = {
            daysBtn: (val) =>
                setTimeValues(val, val * 24, val * 1440, val * 86400),
            hoursBtn: (val) =>
                setTimeValues(val / 24, val, val * 60, val * 3600),
            minutesBtn: (val) =>
                setTimeValues(val / 1440, val / 60, val, val * 60),
            secondsBtn: (val) =>
                setTimeValues(val / 86400, val / 3600, val / 60, val),
        };
        funcObj[currentId](inputValue);
    }

    function setTimeValues(days, hours, minutes, seconds) {
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
}
