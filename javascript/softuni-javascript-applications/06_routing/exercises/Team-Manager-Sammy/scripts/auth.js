import { userState } from './userState.js';
import { handleError } from './common.js';

export function register({ params: { email, password, repeatPassword } }) {
    if (email === '' || password === '' || repeatPassword === '') {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    if (password !== repeatPassword) {
        handleError({ message: 'Passwords should match!' });
        return;
    }

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
            if (data) {
                const { user } = data;
                userState.setUser({
                    loggedIn: true,
                    hasTeam: false,
                    username: user.email,
                    id: user.uid,
                    isOnTeam: false,
                });
            }
            this.redirect('/');
        })
        .catch(function (error) {
            handleError(error);
        });
}

export function login({ params: { email, password } }) {
    if (email === '' || password === '') {
        handleError({ message: 'Fields can not be empty!' });
    }

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            if (data) {
                const { user } = data;

                userState.hasTeam(user.uid).then((teamId) => {
                    userState.setUser({
                        loggedIn: true,
                        hasTeam: !!teamId,
                        username: user.email,
                        id: user.uid,
                        isOnTeam: teamId,
                    });

                    this.redirect('/');
                });
            }
        })
        .catch(function (error) {
            handleError(error);
        });
}

export function logout() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            userState.setUser({
                loggedIn: false,
                hasTeam: false,
                username: '',
                id: null,
                isOnTeam: false,
            });
            ``;
            this.redirect('/');
        })
        .catch(function (error) {
            handleError(error);
        });
}
