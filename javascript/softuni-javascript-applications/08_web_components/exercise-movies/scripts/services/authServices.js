import { notify } from '../utils.js';

firebase.initializeApp({
    apiKey: 'AIzaSyBFATJ98BeptBpYiM6tboQT7hpj8tCd6xQ',
    authDomain: 'my-movies-602a6.firebaseapp.com',
    databaseURL: 'https://my-movies-602a6.firebaseio.com',
    projectId: 'my-movies-602a6',
    storageBucket: 'my-movies-602a6.appspot.com',
    messagingSenderId: '1018861195430',
    appId: '1:1018861195430:web:f9eb9dfb9049fe08dd6467',
});

const database = firebase.database();

export function getMovies() {
    firebase
        .database()
        .ref('/movies')
        .once('value')
        .then((snapshot) => {
            const movies = snapshot.val();
            console.log(movies);
        });
}

export const register = async (email, password) => {
    try {
        const { user } = await firebase
            .auth()
            .createUserWithEmailAndPassword(user);
        localStorage.setItem(
            'auth',
            JSON.stringify({ uid, email, isAnonymous })
        );
        return user;
    } catch (err) {
        notify(err.message, 'error');
    }
};

export const login = async (email, password) => {
    try {
        const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        localStorage.setItem('auth', JSON.stringify(user));
        return user;
    } catch (err) {
        notify(err.message, 'error');
    }
};

export const getUserData = () => {
    try {
        let data = JSON.parse(localStorage.getItem('auth'));
        console.log(data);
        return {
            id: data.uid,
            isAuthenticated: Boolean(data.uid),
            email: data.email,
            accessToken: data.stsTokenManager.refreshToken,
        };
    } catch (err) {
        return {
            id: null,
            isAuthenticated: false,
            email: '',
            accessToken,
        };
    }
};

const isAuthenticated = () => firebase.auth().currentUser;

export const userLogout = () => {
    localStorage.setItem('auth', '');
};
