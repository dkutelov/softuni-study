const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");

const register = (username, password) => {
  let user = new User({ username, password });

  return user.save();
};

const login = async (username, password) => {
  let user = await User.findOne({ username });
  if (!user) throw { message: "No such user", status: 404 };

  //   // if (!user) throw {message: "No such user", status: 404}
  const areEqual = await bcrypt.compare(password, user.password);

  if (!areEqual) throw { message: "Invalid password", status: 404 };

  let token = jwt.sign({ _id: user._id, username: user.user.username }, SECRET);
  return token;
};

module.exports = {
  register,
  login,
};
