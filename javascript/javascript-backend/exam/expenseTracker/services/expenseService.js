const mongoose = require("mongoose");
const Expense = require("../models/Expense");
const User = require("../models/User");

async function getAll(user) {
  return Expense.find({ user: user._id }).lean();
}

function create(data, user) {
  return new Expense({ ...data, user: user._id }).save();
}

function findOneById(expenseId, user) {
  return Expense.findOne({ _id: expenseId, user: user._id }).lean();
}

function deleteOne(itemId, user) {
  return Expense.deleteOne({
    _id: itemId,
    user: user._id,
  });
}

module.exports = {
  getAll,
  create,
  findOneById,
  editOne,
  deleteOne,

};
