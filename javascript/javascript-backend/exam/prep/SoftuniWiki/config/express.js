const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const helpers = require('./hbsHelpers');

module.exports = (app) => {
    app.engine(
        'hbs',
        hbs({
            extname: 'hbs',
            helpers,
        })
    );
    app.set('view engine', 'hbs');

    app.use(express.static('public'));

    app.use(
        express.urlencoded({
            extended: true,
        })
    );

    app.use(cookieParser());
    app.use(auth());
};
