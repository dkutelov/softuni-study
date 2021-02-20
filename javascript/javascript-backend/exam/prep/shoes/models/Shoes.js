const { Schema, Types, model } = require('mongoose');

const shoesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    brand: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    buyers: [
        {
            type: Types.ObjectId,
            ref: 'User',
        },
    ],
    creator: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

module.exports = model('Shoes', shoesSchema);
