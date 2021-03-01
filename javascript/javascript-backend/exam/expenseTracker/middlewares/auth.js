const jwt = require('jsonwebtoken');
const { SECRET, COOKIE_NAME } = require('../config/config');

module.exports = function () {
    return function (req, res, next) {
        const token = req.cookies[COOKIE_NAME];

        if (token) {
            try {
                const userObj = jwt.verify(token, SECRET);
                req.user = userObj;
                res.locals.user = userObj;
                res.locals.isAuthenticated = true;
            } catch (error) {
                res.clearCookie(COOKIE_NAME);
            }
        }

        next();
    };
};
