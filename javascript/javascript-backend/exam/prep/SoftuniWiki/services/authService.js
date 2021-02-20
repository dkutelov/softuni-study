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

const addArtice = async (userId, articleId) => {
    await User.updateOne(
        {
            _id: userId,
        },
        { $push: { createdArticles: articleId } }
    );
};

const removeArtice = async (userId, articleId) => {
    await User.updateOne(
        {
            _id: userId,
        },
        { $pull: { createdArticles: articleId } }
    );
};

const isAutor = async (userId, articleId) => {
    const isAutor = await User.findOne({
        _id: userId,
        createdArticles: { $in: [articleId] },
    });
    return !!isAutor;
};

module.exports = {
    register,
    login,
    addArtice,
    removeArtice,
    isAutor,
};
