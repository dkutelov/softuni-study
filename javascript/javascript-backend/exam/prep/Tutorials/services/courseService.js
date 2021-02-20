const mongoose = require('mongoose');
const Course = require('../models/Course');
const User = require('../models/User');

async function getAll(user, query) {
    if (user) {
        let courses = await Course.find({})
            .select('title imageUrl createdAt')
            .sort('-createdAt')
            .lean();

        if (query.searchTerm) {
            courses = courses.filter((c) =>
                c.title.toLowerCase().includes(query.searchTerm)
            );
        }

        return courses;
    }

    return Course.find({})
        .sort({
            usersEnrolled: -1,
        })
        .select('title imageUrl')
        .limit(3)
        .lean();
}

async function create(data, user) {
    const { title } = data;
    try {
        const courseExists = await Course.findOne({ title });
        if (courseExists)
            throw { message: 'Course with this title already exists!' };
        await new Course({ ...data, creator: user._id }).save();
    } catch (error) {
        return error;
    }
}

async function findOneById(courseId, user) {
    let course;

    try {
        course = await Course.findById(courseId).lean();
        course.isEnrolled = course.usersEnrolled.find(
            (u) => u.toString() === user._id
        );
        course.isCreator = user._id === course.creator.toString();
    } catch (error) {
        throw error;
    }
    return course;
}

async function editOne(courseId, user, data) {
    const updatedCourse = await Course.updateOne(
        { _id: courseId, creator: user._id },
        data,
        { new: true }
    ).lean();
    return updatedCourse;
}

async function bookCourse(courseId, user) {
    let course;
    try {
        course = await Course.updateOne(
            {
                _id: courseId,
                usersEnrolled: { $nin: [user._id] },
            },
            { $push: { usersEnrolled: user._id } }
        );
        await User.updateOne(
            {
                _id: user._id,
                enrolledCourses: { $nin: [user._id] },
            },
            { $push: { enrolledCourses: course._id } }
        );
    } catch (error) {
        throw error;
    }
    return course;
}

async function deleteOne(courseId, user) {
    let res;
    try {
        res = await Course.deleteOne({
            _id: courseId,
            usersEnrolled: { $nin: [user._id] },
        });
    } catch (error) {
        throw error;
    }
    return res;
}

module.exports = {
    getAll,
    create,
    findOneById,
    editOne,
    deleteOne,
    bookCourse,
};
