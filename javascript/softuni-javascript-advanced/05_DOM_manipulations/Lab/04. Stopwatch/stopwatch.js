function stopwatch() {
    const currentTime = document.getElementById('time');
    const startButton = document.getElementById('startBtn');
    const stopButton = document.getElementById('stopBtn');
    let time = 0;
    let intervalId;

    function startButtonHandler() {
        time = 0;
        currentTime.innerText = formatTime(0);
        stopButton.removeAttribute('disabled');
        startButton.setAttribute('disabled', true );

        intervalId = setInterval(function () {
            time++;
            currentTime.innerText = formatTime(time);
        }, 1000)
    }

    function stopButtonHandler() {
        stopButton.setAttribute('disabled', true);
        startButton.removeAttribute('disabled');
        clearInterval(intervalId);
    }

    startButton.addEventListener('click', startButtonHandler);

    stopButton.addEventListener('click', stopButtonHandler);

    function formatTime(time) {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${('0'+min).slice(-2)}:${('0' + sec).slice(-2)}`;
    }
}
