const router = require('express').Router();

const authService = require('../services/authService');
const shoesService = require('../services/shoesService');
const { COOKIE_NAME } = require('../config/config');
const {
    validateRegister,
    validateLogin,
} = require('./validators/userValidator');
const isGuest = require('../middlewares/isGuest');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res, next) => {
    const userData = req.body;
    userData.email = userData.email.toLowerCase();
    req.afterErrorPage = 'register';

    const { error } = validateRegister(userData);

    if (error.message) {
        return next(error);
    }

    authService
        .register(userData.email, userData.password)
        .then(() => {
            res.redirect('/auth/login');
        })
        .catch(next);
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    const userData = req.body;
    userData.email = userData.email.toLowerCase();
    req.afterErrorPage = 'login';

    const { error } = validateLogin(userData);

    if (error.message) {
        return next(error);
    }

    authService
        .login(userData.email, userData.password)
        .then((token) => {
            res.cookie(COOKIE_NAME, token, { httpOnly: true });
            res.redirect('/');
        })
        .catch(next);
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

router.get('/profile', (req, res) => {
    const user = req.user;
    shoesService.findUserShoes(user._id).then((shoes) => {
        user.numberOfShoes = shoes.length;
        user.amount = shoes.reduce((acc, curr) => acc + curr.price, 0);
        res.render('profile', { user, shoes });
    });
});

module.exports = router;
