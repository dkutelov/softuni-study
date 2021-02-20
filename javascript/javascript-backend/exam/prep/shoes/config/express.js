const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helpers = require('./hbsHelpers');

const auth = require('../middlewares/auth');

module.exports = (app) => {
    app.use(morgan('tiny'));
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
