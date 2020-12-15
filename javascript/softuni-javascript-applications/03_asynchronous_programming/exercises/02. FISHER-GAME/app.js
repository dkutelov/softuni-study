function attachEvents() {
    const baseURL = 'https://fisher-game.firebaseio.com/catches';
    const catchesDiv = document.getElementById('catches');

    const inputAnglerElement = document.querySelector('#addForm .angler');
    const inputWeightElement = document.querySelector('#addForm .weight');
    const inputSpeciesElement = document.querySelector('#addForm .species');
    const inputLocationElement = document.querySelector('#addForm .location');
    const inputBaitElement = document.querySelector('#addForm .bait');
    const inputTimeElement = document.querySelector('#addForm .captureTime');

    document.querySelector('.load').addEventListener('click', loadCatches);
    document.querySelector('.add').addEventListener('click', createCatch);


    async function loadCatches() {
        try {
            const response = await fetch(`${baseURL}.json`);
            const catches = await response.json();
            catchesDiv.innerHTML = null;
            Object.entries(catches).forEach(currentCatch => addCatchToList(currentCatch));

        } catch (err) {
            console.log(err);
        }
    }

    function addCatchToList(currentCatch) {
        const [key, {angler, weight, species, location, bait, captureTime}] = currentCatch;

        const catchHTML = document.createElement('div');
        catchHTML.classList.add('catch');
        catchHTML.setAttribute('data-id', key);
        catchHTML.innerHTML = `
                <label>Angler</label>
                <input type="text" class="angler" value="${angler}" />
                <hr>
                <label>Weight</label>      
                <input type="number" class="weight" value="${weight}" />
                <hr>
                <label>Species</label>
                <input type="text" class="species" value="${species}" />
                <hr>
                <label>Location</label>
                <input type="text" class="location" value="${location}" />
                <hr>
                <label>Bait</label>
                <input type="text" class="bait" value="${bait}" />
                <hr>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${captureTime}" />
                <hr>`;
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.classList.add('update');
        updateButton.addEventListener('click', () => updateCatch(key));
        catchHTML.appendChild(updateButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteCatch(key));
        catchHTML.appendChild(deleteButton);

        catchesDiv.appendChild(catchHTML);
    }

    async function createCatch(e) {
        e.preventDefault();
        const angler = inputAnglerElement.value;
        const weight = inputWeightElement.value;
        const species = inputSpeciesElement.value;
        const location = inputLocationElement.value;
        const bait = inputBaitElement.value;
        const captureTime = inputTimeElement.value;
        const newCatch = {angler, weight, species, location, bait, captureTime}

        if (Object.values(newCatch).some(v => !v)) {
           return;
        }

        await fetch(`${baseURL}.json`, {
            method: 'POST',
            body: JSON.stringify(newCatch)
        });

        inputAnglerElement.value = null;
        inputWeightElement.value = null;
        inputSpeciesElement.value = null;
        inputLocationElement.value = null;
        inputBaitElement.value = null;
        inputTimeElement.value = null;

        await loadCatches();
    }

    async function updateCatch(key) {
        const currentCatchDiv = document.querySelector(`[data-id=${key}]`);
        const angler = currentCatchDiv.querySelector('input.angler').value;
        const weight = currentCatchDiv.querySelector('.weight').value;
        const species = currentCatchDiv.querySelector('.species').value;
        const location = currentCatchDiv.querySelector('.location').value;
        const bait = currentCatchDiv.querySelector('.bait').value;
        const captureTime = currentCatchDiv.querySelector('.captureTime').value;
        const updateCatch = {angler, weight, species, location, bait, captureTime};

        if (Object.values(updateCatch).some(v => !v)) {
            return;
        }

        await fetch(`${baseURL}/${key}.json`, {
            method: 'PUT',
            body: JSON.stringify(updateCatch)
        });
        await loadCatches();
    }

    async function deleteCatch(key) {
        await fetch(`${baseURL}/${key}.json`, {
            method: 'DELETE'
        });
        await loadCatches();
    }
}

attachEvents();

