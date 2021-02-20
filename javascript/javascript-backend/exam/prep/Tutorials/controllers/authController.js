const router = require('express').Router();

const { COOKIE_NAME } = require('../config');
const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');
const {
    validateRegister,
    validateLogin,
} = require('./helpers/userInputValidator');
const authService = require('../services/authService');

router.get('/register', isGuest, (req, res) => {
    res.render('register');
});

router.post('/register', isGuest, (req, res) => {
    const userData = req.body;
    userData.username = userData.username.toLowerCase();

    let errorMessage = validateRegister(userData);
    if (errorMessage) {
        return res.render('register', {
            error: {
                message: errorMessage,
            },
        });
    }

    authService
        .register(userData)
        .then((token) => {
            res.cookie(COOKIE_NAME, token);
            res.redirect('/');
        })
        .catch((error) => {
            res.render('register', {
                error,
            });
        });
});

router.get('/login', isGuest, (req, res) => {
    res.render('login');
});

router.post('/login', isGuest, (req, res) => {
    const userData = req.body;
    userData.username = userData.username.toLowerCase();

    const errorMessage = validateLogin(userData);
    if (errorMessage) {
        return res.render('login', {
            error: {
                message: errorMessage,
            },
        });
    }
    authService
        .login(userData)
        .then((token) => {
            res.cookie(COOKIE_NAME, token);
            res.redirect('/');
        })
        .catch((error) => {
            res.render('login', {
                error,
            });
        });
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;
