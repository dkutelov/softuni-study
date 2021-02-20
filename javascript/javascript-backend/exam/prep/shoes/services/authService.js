const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const register = async (email, password) => {
    let emailTaken = await User.findOne({ email });

    if (emailTaken) throw { message: 'User already exisits' };

    return new User({ email, password }).save();
};

const login = async (email, password) => {
    let user = await User.findOne({ email });

    if (!user) throw { message: 'No such user' };

    const areEqual = await bcrypt.compare(password, user.password);

    if (!areEqual) throw { message: 'Invalid password' };

    let token = jwt.sign({ _id: user._id, email: user.email }, SECRET);
    return token;
};

const buyShoes = (shoesId, userId) => {
    return User.updateOne(
        {
            _id: userId,
        },
        { $push: { offersBought: shoesId } }
    );
};

const removedFromBought = (shoesId, userId) => {
    return User.updateOne(
        {
            _id: userId,
        },
        { $pull: { offersBought: shoesId } }
    );
};

const getUsersShoes = async (userId) => {
    return User.findOne({ _id: userId }).select('offersBought').lean();
};

module.exports = {
    register,
    login,
    buyShoes,
    removedFromBought,
    getUsersShoes,
};
