function notify(message) {
    const messageDivElement = document.getElementById('notification');
    messageDivElement.textContent = message;
    messageDivElement.style.display = 'block';

    setTimeout(function () {
        messageDivElement.style.display = 'none';
    }, 2000);
}
