const {
  ENGLISH_ALPHANUMERIC_PATTERN,
  USERNAME_LENGTH,
  PASSWORD_LENGTH,
} = require("../../config/config");

function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

const userValidator = {
  validateRegister({ username, password, rePassword, amount }) {
    let registerErrors = [
      userValidator.validateLogin({ username, password }).error.message,
    ];

    if (password !== rePassword) {
      registerErrors.push(
        "The repeat password should be equal to the password!",
      );
    }

    if (isNaN(amount) || amount < 0) {
      registerErrors.push("The account amount  should be positive number!");
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

    if (password.length < PASSWORD_LENGTH) {
      loginErrors.push(
        `The password should be at least ${PASSWORD_LENGTH} characters long!`,
      );
    }

    if (
      !username.match(ENGLISH_ALPHANUMERIC_PATTERN) ||
      username.length < USERNAME_LENGTH
    ) {
      loginErrors.push(
        `The username should be at least ${USERNAME_LENGTH} characters long and should consist only english letters and digits!`,
      );
    }

    return {
      error: { message: loginErrors.join(" ") },
    };
  },
};

module.exports = userValidator;
