const { Schema, Types, model } = require("mongoose");

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, "Title should be min 5 chars!"],
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length >= 5,
      message: (props) =>
        `Description ${props.value} should should be more then 5 characters!`,
    },
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
