function handleError({ message }) {
    const errorContainer = document.getElementById('errors');
    errorContainer.style.display = 'block';
    errorContainer.textContent = message;
    setTimeout(() => {
        errorContainer.textContent = '';
        errorContainer.style.display = 'none';
    }, 5000);
}

function showNotification({ message }) {
    const infoContainer = document.getElementById('info');
    infoContainer.style.display = 'block';
    infoContainer.textContent = message;
    setTimeout(() => {
        infoContainer.textContent = '';
        infoContainer.style.display = 'none';
    }, 5000);
}
