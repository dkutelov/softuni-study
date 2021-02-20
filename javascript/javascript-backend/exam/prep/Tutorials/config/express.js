const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');

const auth = require('../middlewares/auth');
const helpers = require('./handlebars-helpers');

module.exports = function (app) {
    app.use(morgan('tiny'));

    app.engine(
        'hbs',
        handlebars({
            extname: 'hbs',
            helpers,
        })
    );

    app.set('view engine', 'hbs');
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(
        session({
            secret: 'my secret',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true },
        })
    );
    app.use(auth());
};
