const { Schema, Types, model } = require('mongoose');

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
    },
    imageUrl: {
        type: String,
        required: true,
        minLength: 10,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    usersEnrolled: [
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

module.exports = model('Course', courseSchema);
