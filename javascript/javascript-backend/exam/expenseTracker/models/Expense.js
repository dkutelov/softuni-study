const { Schema, Types, model } = require("mongoose");
const { CATEGORIES } = require("../config/config");
const catIds = CATEGORIES.map((c) => c.id);

const expenseSchema = new Schema({
  merchant: {
    type: String,
    required: true,
    minLength: [5, "Title should be min 5 chars!"],
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: catIds,
  },
  description: {
    type: String,
    required: true,
    minLength: [3, "Title should be min 5 chars!"],
    maxlength: [30, "Title should be max 30 chars!"],
  },
  report: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Expense", expenseSchema);
