const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");

const register = async (username, password, amount) => {
  let usernameTaken = await User.findOne({ username });

  if (usernameTaken) throw { message: "User already exisits" };

  return new User({ username, password, amount }).save();
};

const login = async (username, password) => {
  let user = await User.findOne({ username });

  if (!user) throw { message: "No such user" };

  const areEqual = await bcrypt.compare(password, user.password);

  if (!areEqual) throw { message: "Invalid password" };

  let token = jwt.sign({ _id: user._id, username: user.username }, SECRET);
  return token;
};

const changeAmount = async (value, userId) => {
  return User.updateOne(
    { _id: userId },
    { $inc: { amount: value } },
    {
      new: true,
    },
  ).lean();
};

const addExpense = (expenseId, userId) => {
  return User.updateOne(
    {
      _id: userId,
    },
    { $push: { expenses: expenseId } },
  );
};

const removeExpense = (expenseId, userId) => {
  return User.updateOne(
    {
      _id: userId,
    },
    { $pull: { expenses: expenseId } },
  );
};

const getProfileData = (userId) => {
  return User.findOne({
    _id: userId,
  }).populate("expenses");
};

module.exports = {
  register,
  login,
  changeAmount,
  addExpense,
  removeExpense,
  getProfileData,
};
