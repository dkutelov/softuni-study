function solve() {
    const messageElement = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let nextStop = 'depot';

    function getNextStopData(currentId) {
        return fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => res.json())
            .then(data => {
                const { next, name } = data;
                return next;
            })
            .catch(err => err);
    }

    function updateMessageAndButtons(text, next) {
        messageElement.textContent = `${text} ${next}`;
        departButton.disabled = !departButton.disabled;
        arriveButton.disabled = !arriveButton.disabled;
    }

    function showError() {
        messageElement.textContent = 'Error';
        departButton.disabled = true;
        arriveButton.disabled = true;
    }

    function depart() {
        getNextStopData(nextStop)
            .then(next => {
                if (!next) {
                    showError();
                    return;
                }
                updateMessageAndButtons('Next stop', next);
                nextStop = next;
            })
    }

    function arrive() {
        getNextStopData(nextStop)
            .then(next => {
                if (!next) {
                    showError();
                    return;
                }
                updateMessageAndButtons('Arriving at', next);
                nextStop = next;
            })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
