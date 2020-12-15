const htmlSelectors = {
    errorElement: () => document.getElementById('errorBox'),
    successElement: () => document.getElementById('successBox'),
};

function hide(element) {
    setTimeout(() => {
        element.parentElement.style.display = 'none';
    }, 5000);
}

export function notify(message, type = 'success') {
    let notificationElement;

    switch (type) {
        case 'success':
            notificationElement = htmlSelectors.successElement();
            break;
        case 'error':
            notificationElement = htmlSelectors.errorElement();
    }
    console.log(message);
    notificationElement.parentElement.style.display = 'block';
    notificationElement.textContent = message;
    hide(notificationElement);
}
