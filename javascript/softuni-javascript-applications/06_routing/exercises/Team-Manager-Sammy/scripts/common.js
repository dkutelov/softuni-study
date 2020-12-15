const baseURL = 'https://softuni-27659.firebaseio.com/';

const htmlSelectors = {
    errorContainer: () => document.getElementById('errorBox'),
    infoContainer: () => document.getElementById('infoBox'),
};

function handleError({ message }) {
    const errorContainer = htmlSelectors.errorContainer();
    errorContainer.disabled = false;
    errorContainer.style.display = 'block';
    errorContainer.textContent = message;
    setTimeout(() => {
        errorContainer.textContent = '';
        errorContainer.style.display = 'none';
    }, 5000);
}

function showNotification({ message }) {
    const infoContainer = htmlSelectors.infoContainer();
    infoContainer.disabled = false;
    infoContainer.style.display = 'block';
    infoContainer.textContent = message;
    setTimeout(() => {
        infoContainer.textContent = '';
        infoContainer.style.display = 'none';
    }, 5000);
}

export { baseURL, htmlSelectors, handleError, showNotification };
