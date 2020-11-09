function attachEventsListeners() {
    const convertButton = document.getElementById('convert');
    const inputUnitSelect = document.getElementById('inputUnits');
    const outputUnitSelect = document.getElementById('outputUnits');
    const distanceInput = document.getElementById('inputDistance');
    const distanceOutput = document.getElementById('outputDistance');
    const conversionRates = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];

    convertButton.addEventListener('click', convertHandler);

    function convertHandler(e) {
        const inputUnitIndex = inputUnitSelect.selectedIndex;
        const outputUnitIndex = outputUnitSelect.selectedIndex;
        distanceOutput.value = ( distanceInput.value * conversionRates[inputUnitIndex] ) / conversionRates[outputUnitIndex];
    }
}