const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const register = async ({ username, password }) => {
  // validate
  //   if (userData.password !== userData.repeatPassword) {
  //     throw { message: "Password mismatch" };
  //   }
  //TODO username to lowercase
  //TODO check if the user exists
  const salt = await bcrypt.genSalt(config.SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);
  const user = new User({ username, password: hash });
  console.log(user);
  return await user.save();
};

const login = async ({ username, password }) => {
  let user = await User.findOne({ username });

  if (!user) {
    throw { message: "Unsuccesfull login! - username" };
  }

  let isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw { message: "Unsuccesfull login - password!" };
  }

  // put roles if admin or not admin -> this info is called claims
  const token = jwt.sign(
    { id: user._id, username: user.username, role: "admin" },
    config.SECRET,
  );

  return token;
};

module.exports = {
  register,
  login,
};
