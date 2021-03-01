const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { SALT_ROUNDS } = require("../config/config");
const {
  ENGLISH_ALPHANUMERIC_PATTERN,
  USERNAME_LENGTH,
  PASSWORD_LENGTH,
} = require("../config/config");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: [
      USERNAME_LENGTH,
      `Username should be min ${USERNAME_LENGTH} characters long and should consist only english letters and digits!`,
    ],
    validate: {
      validator: (value) => ENGLISH_ALPHANUMERIC_PATTERN.test(value),
      message: (props) =>
        `Username should be min ${USERNAME_LENGTH} characters long and should consist only english letters and digits!`,
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [
      PASSWORD_LENGTH,
      `Password should be min ${PASSWORD_LENGTH} characters long!`,
    ],
  },
  amount: {
    type: Number,
    required: true,
    min: [0, "The account amount  should be positive number!"],
    default: 0,
  },
  expenses: [
    {
      type: Schema.ObjectId,
      ref: "Expense",
    },
  ],
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = model("User", userSchema);
