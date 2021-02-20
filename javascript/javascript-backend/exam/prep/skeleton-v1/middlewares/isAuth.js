const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");
const { COOKIE_NAME } = require("../config/config");

module.exports = function (req, res, next) {
  //TODO Notification if not auth
  let token = res.cookies[COOKIE_NAME];

  if (!token) return res.redirect("/auth/login");

  jwt.verify(token, SECRET, function (err, decoded) {
    if (err) return res.redirect("/auth/login");
    next();
  });
};
