const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { SALT_ROUNDS } = require("../config/config");
const {
  ENGLISH_ALPHANUMERIC_PATTERN,
  ENGLISH_ALPHANUMERIC_EMAIL_PATTERN,
} = require("../config/config");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (value) => ENGLISH_ALPHANUMERIC_EMAIL_PATTERN.test(value),
      message: (props) =>
        `Email ${props.value} should contain only English letter and numbers!`,
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
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
    if (err) return next(err);
    console.log(salt);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = model("User", userSchema);
