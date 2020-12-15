export function handleError({ message }) {
    console.log('message', message);
    const notificationContainer = document.getElementById('notifications');
    const mainContainer = document.getElementById('container');

    const errorContainer = document.getElementById('error');
    errorContainer.style.display = 'block';
    errorContainer.textContent = message;

    notificationContainer.addEventListener('click', removeErrorMessage);
    mainContainer.addEventListener('click', removeErrorMessage);

    function removeErrorMessage(e) {
        errorContainer.style.display = 'none';
        errorContainer.textContent = '';
        mainContainer.removeEventListener('click', removeErrorMessage);
    }
}

export function handleNotification({ message }) {
    const infoContainer = document.getElementById('info');
    infoContainer.style.display = 'block';
    infoContainer.textContent = message;
    setTimeout(() => {
        infoContainer.textContent = '';
        infoContainer.style.display = 'none';
    }, 3000);
}
