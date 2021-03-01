const isEmail = require("validator/lib/isEmail");

const {
  ENGLISH_ALPHANUMERIC_PATTERN,
  ENGLISH_ALPHANUMERIC_EMAIL_PATTERN,
} = require("../../config/config");

function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

const userValidator = {
  validateRegister({ email, password, rePassword }) {
    let registerErrors = [
      userValidator.validateLogin({ email, password }).error.message,
    ];

    if (password !== rePassword) {
      registerErrors.push("The two passwords should match!");
    }

    return {
      error: { message: registerErrors.join(" ") },
    };
  },
  validateLogin({ email, password }) {
    let loginErrors = [];
    if (
      isEmtpy({
        email,
        password,
      })
    ) {
      loginErrors.push("Fields can not be empty!");
    }

    if (!isEmail(email)) {
      loginErrors.push("Please, enter valid email!");
    }

    if (!password.match(ENGLISH_ALPHANUMERIC_PATTERN) || password.length < 3) {
      loginErrors.push(
        "The password should be at least 3 characters long and should consist only english letters and digits!",
      );
    }

    if (!email.match(ENGLISH_ALPHANUMERIC_EMAIL_PATTERN) || email.length < 3) {
      loginErrors.push(
        "The email should be at least 3 characters long and should consist only english letters and digits!",
      );
    }

    return {
      error: { message: loginErrors.join(" ") },
    };
  },
};

module.exports = userValidator;
