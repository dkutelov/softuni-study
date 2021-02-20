const { Schema, Types, model } = require("mongoose");

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 4,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Item", itemSchema);
