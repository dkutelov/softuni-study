import authService from '../services/authService.js';
import { router } from '../router.js';
import { handleError, handleNotification } from '../utils.js';

export default {
    onRegisterSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('rePassword');

        if (password === '' || repeatPassword === '' || email === '') {
            handleError({ message: 'Field(s) can not be empty!' });
            return;
        }

        if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            handleError({ message: 'Email should have correct format!' });
            return;
        }

        if (password !== repeatPassword) {
            handleError({ message: 'Two passwords should match!' });
            return;
        }

        authService.register(email, password).then((data) => {
            handleNotification({ message: 'User registration successful' });
            router('/');
        });
    },
    onLoginSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');

        if (password === '' || email === '') {
            handleError({ message: 'Field(s) can not be empty!' });
            return;
        }

        if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            handleError({ message: 'Email should have correct format!' });
            return;
        }

        authService.login(email, password).then((data) => {
            if (data) {
                handleNotification({ message: 'Login successful!' });
                router('/');
            }
        });
    },
    onLogout(e) {
        e.preventDefault();
        authService.logout();
        handleNotification({ message: 'Logout successful.' });
        router('/login');
    },
};
