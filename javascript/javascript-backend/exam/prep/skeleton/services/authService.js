const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");

const register = async (email, password) => {
  let usernameTaken = await User.findOne({ email });

  if (usernameTaken) throw { message: "User already exisits" };

  return new User({ email, password }).save();
};

const login = async (email, password) => {
  let user = await User.findOne({ email });

  if (!user) throw { message: "No such user" };

  const areEqual = await bcrypt.compare(password, user.password);

  if (!areEqual) throw { message: "Invalid password" };

  let token = jwt.sign({ _id: user._id, username: user.username }, SECRET);
  return token;
};

module.exports = {
  register,
  login,
};
