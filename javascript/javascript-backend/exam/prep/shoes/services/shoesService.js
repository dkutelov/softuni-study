const mongoose = require('mongoose');
const Shoes = require('../models/Shoes');
const User = require('../models/User');

async function getAll() {
    return Shoes.find({})
        .sort({ buyers: 1 })
        .select('name imageUrl price')
        .lean();
}

async function create(data, user) {
    const { name } = data;

    const itemExists = await Shoes.findOne({ name });
    if (itemExists) throw { message: 'Shoes with this name already exists!' };
    return new Shoes({ ...data, creator: user._id }).save();
}

async function findOneById(itemId, user) {
    let shoes;
    try {
        shoes = await Shoes.findById(itemId).lean();
        shoes.hasBought = shoes.buyers.find((u) => u.toString() === user._id);
        shoes.isCreator = user._id === shoes.creator.toString();
        shoes.buyers = shoes.buyers.length;
    } catch (error) {
        throw error;
    }
    return shoes;
}

async function getOne(itemId) {
    return Shoes.findById(itemId).lean();
}

function editOne(itemId, data) {
    return Shoes.updateOne({ _id: itemId }, data, {
        new: true,
    }).lean();
}

async function buyShoes(shoesId, userId) {
    return Shoes.updateOne(
        {
            _id: shoesId,
            buyers: { $nin: [userId] },
        },
        { $push: { buyers: userId } }
    );
}

function deleteOne(shoesId) {
    return Shoes.deleteOne({
        _id: shoesId,
    });
}

async function findUserShoes(userId) {
    let shoes = Shoes.find({ buyers: { $in: [userId] } })
        .select('name imageUrl price')
        .lean();
    shoes.numberOfShoes = shoes.length;

    return shoes;
}

module.exports = {
    getAll,
    create,
    findOneById,
    editOne,
    deleteOne,
    getOne,
    buyShoes,
    findUserShoes,
};
