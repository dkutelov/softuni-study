const htmlSelectors = {
    registerBtn: () => document.getElementById('register-button'),
    loginBtn: () => document.getElementById('login-button'),
    logoutBtn: () => document.getElementById('logout-button'),
    registerInputs: () => document.querySelectorAll('.register-form input'),
    loginInputs: () => document.querySelectorAll('.login-form input'),
    userStatusElement: () => document.getElementById('user-status'),
    errorWrapper: () => document.getElementById('error'),
};

htmlSelectors.registerBtn().addEventListener('click', onRegister);
htmlSelectors.logoutBtn().addEventListener('click', onLogout);
htmlSelectors.loginBtn().addEventListener('click', onLogin);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        htmlSelectors.userStatusElement().textContent = `${user.email} is logged`;
        htmlSelectors.logoutBtn().disabled = false;
    } else {
        htmlSelectors.userStatusElement().textContent = 'User not logged';
        htmlSelectors.logoutBtn().disabled = true;
    }
});

function onRegister(e) {
    e.preventDefault();
    const [emailElement, passwordElement] = Array.from(
        htmlSelectors.registerInputs()
    );

    if (!emailElement.value || !passwordElement.value) {
        showError({ message: 'Fields can not be empty!' });
    }

    firebase
        .auth()
        .createUserWithEmailAndPassword(
            emailElement.value,
            passwordElement.value
        )
        .catch(function (error) {
            showError(error);
        });

    emailElement.value = '';
    passwordElement.value = '';
}

function onLogin(e) {
    e.preventDefault();
    const [emailElement, passwordElement] = Array.from(
        htmlSelectors.loginInputs()
    );

    if (!emailElement.value || !passwordElement.value) {
        showError({ message: 'Fields can not be empty!' });
    }

    firebase
        .auth()
        .signInWithEmailAndPassword(emailElement.value, passwordElement.value)
        .catch(function (error) {
            showError(error);
        });

    emailElement.value = '';
    passwordElement.value = '';
}

function onLogout() {
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            showError(error);
        });
}

function showError(err) {
    const errorWrapper = htmlSelectors.errorWrapper();
    errorWrapper.style.display = 'block';
    errorWrapper.textContent = err.message;

    setTimeout(() => {
        errorWrapper.textContent = '';
        errorWrapper.style.display = 'none';
    }, 5000);
}
