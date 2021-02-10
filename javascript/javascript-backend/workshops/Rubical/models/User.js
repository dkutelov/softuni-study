const { Schema, Types, model } = require("mongoose");

const ENGLISH_ALPHANUMERIC_PATTERN = /^[a-zA-Z0-9]+$/;

const userSchema = new Schema({
  id: Types.ObjectId,
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true,
    validate: {
      validator: (value) => ENGLISH_ALPHANUMERIC_PATTERN.test(value),
      message: (props) =>
        `Username ${props.value} should contain only English letter and numbers!`,
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate: {
      validator: (value) => ENGLISH_ALPHANUMERIC_PATTERN.test(value),
      message: (props) =>
        `Password should contain only English letter and numbers!`,
    },
  },
});

// userSchema.pre("save", function (next) {});

module.exports = model("User", userSchema);
