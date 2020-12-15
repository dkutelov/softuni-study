function attachEvents() {
    const baseURL = 'https://judgetests.firebaseio.com/locations.json';
    const baseForecastURL = 'https://judgetests.firebaseio.com/forecast';
    const validLocationNames = ["london", "new york", "barcelona"];
    const iconMap = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast':'&#x2601;',
        'Rain':'&#x2614;'
    };

    const submitButton = document.getElementById('submit');
    const locationInput = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const forecastDivInitial = forecastDiv.innerHTML;

    submitButton.addEventListener('click', onLocationSubmit);

    async function onLocationSubmit() {
        resetInitialForecastDiv();
        const locationName = locationInput.value;
        locationInput.value = null;

        if (!validLocationNames.includes(locationName.toLowerCase())) {
            showError();
            return;
        }

        const code = await getLocationCode(locationName);
        const currentForecast = await fetchForecast(baseForecastURL, 'today', code);
        const upcomingForecast = await fetchForecast(baseForecastURL, 'upcoming', code);
        showForecasts(currentForecast, upcomingForecast);
    }


    function showError() {
        forecastDiv.style.display = 'block';
        forecastDiv.innerHTML = '<div style="text-align: center;color: red;">Error</div>';
    }

    async function getLocationCode(locationName) {
        try {
            const response = await fetch(baseURL);
            const locations = await response.json();
            const currentLocation = locations.find( location => location.name === capitalize(locationName));
            return currentLocation.code;
        } catch (e) {
            showError();
        }
    }

    async function fetchForecast(url, forecastType, code) {
        try {
            const response = await fetch(`${url}/${forecastType}/${code}.json`);
            return await response.json();
        } catch (e) {
            showError();
        }
    }

    function showForecasts(currentForecast, upcomingForecast) {
        forecastDiv.style.display = 'block';

        const {name: currentName, forecast: {low, high, condition}} = currentForecast;
        document.getElementById('current').innerHTML += `
                <div class="forecasts">
                    <span class="condition symbol">${iconMap[condition]}</span>
                    <span class="condition">
                        <span class="forecast-data">${currentName}</span>
                        <span class="forecast-data">${low}/${high}&#176;</span>
                        <span class="forecast-data">${condition}</span>
                    </span>
                </div>`;

        const {name:upcomingName, forecast } = upcomingForecast;
        document.getElementById('upcoming').innerHTML += `
                <div class="forecast-info">
                    ${forecast.map(({low, high, condition}) => `<span class="upcoming">
                        <span class="symbol">${iconMap[condition]}</span>
                        <span class="forecast-data">${low}/${high}&#176;</span>
                        <span class="forecast-data">${condition}</span>
                    </span>`).join('')}
                </div>`;
    }

    function resetInitialForecastDiv() {
        forecastDiv.style.display = 'none';
        forecastDiv.innerHTML = forecastDivInitial;
    }

    function capitalize(text) {
        return Array.from(text).map((char, index) => {
            if (index === 0 || (index > 0 && text[index-1] === ' ')) {
                return char.toUpperCase();
            }
            return char;
        }).join('');
    }
}

attachEvents();
