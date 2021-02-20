const { Schema, Types, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { SALT_ROUNDS } = require("../config/config");
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
  enrolledCourses: [
    {
      type: Types.ObjectId,
      ref: "Course",
    },
  ],
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
