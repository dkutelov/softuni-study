const jwt = require("jsonwebtoken");

const { SECRET } = require("../config/config");

async function auth(res, req, next) {
  const authHeader = req.get("Authorization");
  if (authHeader) {
    let token = authHeader.split(" ")[1];
    const decodedToken = await jwt.verify(token, SECRET);
    // go to db and get all user if needed
    req.user = decodedToken;
  }

  next();
}
async function isAuth(res, req, next) {}

module.exports = {
  auth,
  isAuth,
};
