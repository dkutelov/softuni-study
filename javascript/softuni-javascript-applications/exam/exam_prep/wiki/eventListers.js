import authService from './services/authService.js';
import articleService from './services/articleService.js';
import { router } from './router.js';

export const onRegisterSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('rep-pass');

    if (password === '' || repeatPassword === '' || email === '') {
        return;
    }

    if (password !== repeatPassword) {
        return;
    }

    authService.register(email, password).then((data) => {
        router('/');
    });
};

export const onLoginSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');

    if (password === '' || email === '') {
        return;
    }

    authService.login(email, password).then((data) => {
        router('/');
    });
};

export const onLogout = (e) => {
    e.preventDefault();
    authService.logout();
    router('/login');
};

export const onCreateSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let title = formData.get('title') || 'article 1';
    let category = formData.get('category') || 'category 1';
    let content = formData.get('content') || 'content 1';

    if (title === '' || category === '' || content === '') {
        return;
    }

    const { email } = authService.getAuthData();

    articleService
        .add({
            title,
            category,
            content,
            'creator-email': email,
        })
        .then((article) => {
            router('/');
        });
};
