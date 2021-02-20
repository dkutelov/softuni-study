const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");
const { COOKIE_NAME } = require("../config/config");

function auth(res, req, next) {
  let token = res.cookies[COOKIE_NAME];

  if (token) {
    jwt.verify(token, SECRET, function (err, decoded) {
      if (err) {
        res.clearCookie(COOKIE_NAME);
      } else {
        req.user = decoded;
        res.locals.user = decoded;
        res.locals.isAuthenticated = true;
      }
    });
  }

  next();
}

module.exports = auth;
