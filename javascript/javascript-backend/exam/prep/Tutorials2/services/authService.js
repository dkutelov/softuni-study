const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const register = async (username, password) => {
    let usernameTaken = await User.findOne({ username });

    if (usernameTaken) throw { error: { message: 'User already exisits' } };

    return new User({ username, password }).save();
};

const login = async (username, password) => {
    let user = await User.findOne({ username });

    if (!user) throw { error: { message: 'No such user' } };

    //   // if (!user) throw {message: "No such user", status: 404}
    const areEqual = await bcrypt.compare(password, user.password);

    if (!areEqual) throw { error: { message: 'Invalid password' } };

    let token = jwt.sign({ _id: user._id, username: user.username }, SECRET);
    return token;
};

module.exports = {
    register,
    login,
};
