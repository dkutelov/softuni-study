const jwt = require('jsonwebtoken');
const { COOKIE_NAME, JWT_SECRET } = require('../config');

module.exports = function () {
    return function (req, res, next) {
        const token = req.cookies[COOKIE_NAME];

        if (token) {
            try {
                const userObj = jwt.verify(token, JWT_SECRET);
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
