const { Schema, Types, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { SECRET, SALT_ROUNDS } = require("../config/config");
const ENGLISH_ALPHANUMERIC_PATTERN = /^[a-zA-Z0-9]+$/;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
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
    validate: {
      validator: (value) => ENGLISH_ALPHANUMERIC_PATTERN.test(value),
      message: (props) =>
        `Password should contain only English letter and numbers!`,
    },
  },
});

userSchema.pre("save", function (next) {
  bcrypt
    .genSalt(SALT_ROUNDS)
    .then((salt) => bcrypt.hash(this.password, salt))
    .then((hash) => {
      this.password = hash;
      next();
    });
});

module.exports = model("User", userSchema);
