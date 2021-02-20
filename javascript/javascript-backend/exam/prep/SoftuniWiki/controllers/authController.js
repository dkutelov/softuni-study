const router = require('express').Router();

const authService = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');
const {
    validateRegister,
    validateLogin,
} = require('./validators/userValidator');
const isGuest = require('../middlewares/isGuest');

router.get('/register', isGuest, (req, res) => {
    res.render('register');
});

router.post('/register', isGuest, (req, res, next) => {
    const userData = req.body;
    userData.username = userData.username.toLowerCase();

    const { error } = validateRegister(userData);

    if (error.message) {
        return res.render('register', { error, username: userData.username });
    }

    authService
        .register(userData.username, userData.password)
        .then((createdUser) => {
            res.redirect('/auth/login');
        })
        .catch((error) => {
            return res.render('register', error);
        });
});

router.get('/login', isGuest, (req, res) => {
    res.render('login');
});

router.post('/login', isGuest, (req, res, next) => {
    const userData = req.body;
    userData.username = userData.username.toLowerCase();

    const { error } = validateLogin(userData);

    if (error.message) {
        return res.render('login', { error });
    }

    authService
        .login(userData.username, userData.password)
        .then((token) => {
            res.cookie(COOKIE_NAME, token, { httpOnly: true });
            res.redirect('/');
        })
        .catch((error) => {
            return res.render('login', error);
        });
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;
