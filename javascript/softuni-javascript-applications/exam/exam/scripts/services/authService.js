import request from './request.js';
import { handleError } from '../utils.js';

const apiKey = 'AIzaSyDzd0YvaY8xvzcE9hvDXIfVVAudBH2P7DU';
const baseAuthURL = 'https://identitytoolkit.googleapis.com/v1/accounts';
const api = {
    register: `${baseAuthURL}:signUp?key=${apiKey}`,
    login: `${baseAuthURL}:signInWithPassword?key=${apiKey}`,
};

export default {
    async register(email, password) {
        let data;
        try {
            data = await request.post(api.register, {
                email,
                password,
            });
        } catch (error) {
            handleError(error.message);
        }

        localStorage.setItem('auth', JSON.stringify(data));
        return data;
    },
    async login(email, password) {
        let data = await request.post(api.login, {
            email,
            password,
        });
        localStorage.setItem('auth', JSON.stringify(data));
        return data;
    },
    logout() {
        localStorage.setItem('auth', '');
    },

    getAuthData() {
        try {
            let { idToken, email, localId } = JSON.parse(
                localStorage.getItem('auth')
            );
            return {
                isAuthenticated: Boolean(idToken),
                email,
                idToken,
                id: localId,
            };
        } catch (err) {
            return {
                isAuthenticated: false,
                email: null,
                idToken: null,
                id: null,
            };
        }
    },
};
