const { Schema, Types, model } = require('mongoose');

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
    },
    articleAuthor: {
        type: Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Item', itemSchema);
