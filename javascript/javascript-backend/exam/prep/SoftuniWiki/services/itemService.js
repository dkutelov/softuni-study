const mongoose = require('mongoose');
const Item = require('../models/Item');
const User = require('../models/User');

async function getAll() {
    return Item.find({})
        .select('title description')
        .sort('-createdAt')
        .limit(3)
        .lean();
}

async function getAllTitles(searcText) {
    let items = await Item.find({}).select('title').lean();

    if (searcText) {
        items = items.filter((c) => c.title.toLowerCase().includes(searcText));
    }
    return items;
}

async function create(data, user) {
    const { title } = data;

    const itemExists = await Item.findOne({ title });
    if (itemExists)
        throw { error: { message: 'Course with this title already exists!' } };

    return new Item({ ...data, articleAuthor: user._id }).save();
}

async function findOneById(itemId, user) {
    let item;
    try {
        item = await Item.findById(itemId).lean();
        // course.isEnrolled = course.usersEnrolled.find(
        //     (u) => u.toString() === user._id
        // );
        if (user) {
            item.isAuthor = user._id === item.articleAuthor.toString();
        }
    } catch (error) {
        throw error;
    }
    return item;
}

function editOne(itemId, description) {
    return Item.updateOne(
        { _id: itemId },
        { description },
        {
            new: true,
        }
    ).lean();
}

function deleteOne(itemId, user) {
    return Item.deleteOne({
        _id: itemId,
    });
}

module.exports = {
    getAll,
    getAllTitles,
    create,
    findOneById,
    editOne,
    deleteOne,
    // bookCourse,
};
