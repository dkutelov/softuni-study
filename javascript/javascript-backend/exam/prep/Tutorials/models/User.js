const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const { SALT_ROUNDS } = require('../config');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    enrolledCourses: [
        {
            type: Schema.ObjectId,
            ref: 'Course',
        },
    ],
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
        if (err) return next(err);
        console.log(salt);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.validatePassword = async function validatePassword(
    candidatePassword
) {
    const isPasswordCorrect = await bcrypt.compare(
        candidatePassword,
        this.password
    );
    return isPasswordCorrect;
};

module.exports = model('User', userSchema);
