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
            registerErrors.push('The two passwords should match!');
        }

        return {
            error: { message: registerErrors.join(' ') },
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
            loginErrors.push('Fields can not be empty!');
        }

        return {
            error: { message: loginErrors.join(' ') },
        };
    },
};

module.exports = userValidator;
