function getInfo() {
    const stopIdInput = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busesListElement = document.getElementById('buses');

    const stopId = stopIdInput.value;

    if (!stopId) return;

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
            .then(res => res.json())
            .then(data => {
                const {name:stopName, buses} = data;
                stopNameDiv.textContent = stopName;
                busesListElement.innerHTML = Object.keys(buses)
                    .map(busId => `<li>Bus ${busId} arrives in ${buses[busId]} minutes</li>`);
            })
            .catch(err => {
                stopNameDiv.innerHTML = 'Error';
                busesListElement.innerHTML = null;
            });
    stopIdInput.value = null;
}
