const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { JWT_SECRET } = require('../config');

async function register(data) {
    const { username } = data;
    const user = await User.findOne({ username });
    if (user) {
        throw { message: 'Username already exists!' };
    }

    const newUser = await new User(data).save();

    let token = jwt.sign(
        { _id: newUser._id, username: newUser.username },
        JWT_SECRET
    );
    return token;
}

async function login({ username, password }) {
    let user = await User.findOne({ username });

    if (!user) throw { message: 'User not found!' };

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
        throw { message: 'User or password not correct!' };
    }

    let token = jwt.sign(
        { _id: user._id, username: user.username },
        JWT_SECRET
    );
    return token;
}

module.exports = {
    register,
    login,
};
