const { ENGLISH_ALPHANUMERIC_PATTERN } = require("../../config/config");

function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

const userValidator = {
  validateRegister({ username, password, rePassword }) {
    let registerErrors = [
      userValidator.validateLogin({ username, password }).error.message,
    ];

    if (password !== rePassword) {
      registerErrors.push("The two passwords should match!");
    }

    return {
      error: { message: registerErrors.join(" ") },
    };
  },
  validateLogin({ username, password }) {
    let loginErrors = [];
    if (
      isEmtpy({
        username,
        password,
      })
    ) {
      loginErrors.push("Fields can not be empty!");
    }

    if (!password.match(ENGLISH_ALPHANUMERIC_PATTERN) || password.length < 5) {
      loginErrors.push(
        "The password should be at least 5 characters long and should consist only english letters and digits!",
      );
    }

    if (!username.match(ENGLISH_ALPHANUMERIC_PATTERN) || username.length < 5) {
      loginErrors.push(
        "The username should be at least 5 characters long and should consist only english letters and digits!",
      );
    }

    return {
      error: { message: loginErrors.join(" ") },
    };
  },
};

module.exports = userValidator;
