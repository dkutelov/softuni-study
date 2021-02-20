function isEmtpy(data) {
    const propNames = Object.keys(data);
    return !(propNames.length === propNames.filter((k) => data[k]).length);
}

const userInputValidator = {
    validateRegister({ username, password, rePassword }) {
        let registerErrors = [
            userInputValidator.validateLogin({ username, password }),
        ];

        if (password !== rePassword) {
            registerErrors.push(
                'The repeat password should be equal to the password!'
            );
        }

        return registerErrors.join(' ');
    },
    validateLogin({ username, password }) {
        let loginErrors = [];
        if (
            isEmtpy({
                username,
                password,
            })
        ) {
            loginErrors.push('Fields can not be empty!');
        }

        if (!password.match(/^[0-9a-zA-Z]+$/) || password.length < 5) {
            loginErrors.push(
                'The password should be at least 5 characters long and should consist only english letters and digits!'
            );
        }

        if (!username.match(/^[0-9a-zA-Z]+$/) || username.length < 5) {
            loginErrors.push(
                'The username should be at least 5 characters long and should consist only english letters and digits!'
            );
        }

        return loginErrors.join(' ');
    },
};

module.exports = userInputValidator;
