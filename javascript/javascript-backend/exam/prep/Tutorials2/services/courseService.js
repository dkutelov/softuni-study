const mongoose = require("mongoose");
const Course = require("../models/Course");
const User = require("../models/User");

async function getAll(user, query) {
  // authenticated user
  if (user) {
    let items = await Course.find({})
      .select("title description imageUrl createdAt")
      .sort({ createdAt: -1 })
      .lean();

    if (query.searchTerm) {
      items = items.filter((c) =>
        c.title.toLowerCase().includes(query.searchTerm),
      );
    }

    return items;
  }

  // guest user
  return Course.find({})
    .sort({
      usersEnrolled: -1,
    })
    .select("title imageUrl")
    .limit(3)
    .lean();
}

async function create(data, user) {
  const { title } = data;

  const itemExists = await Course.findOne({ title });
  if (itemExists)
    throw { error: { message: "Course with this title already exists!" } };
  return new Course({ ...data, creator: user._id }).save();
}

async function findOneById(courseId, user) {
  let course;

  try {
    course = await Course.findById(courseId).lean();
    course.isEnrolled = course.usersEnrolled.find(
      (u) => u.toString() === user._id,
    );
    course.isCreator = user._id === course.creator.toString();
  } catch (error) {
    throw error;
  }
  return course;
}

function editOne(itemId, user, data) {
  return Course.updateOne({ _id: itemId }, data, {
    new: true,
  }).lean();
}

async function bookCourse(courseId, user) {
  let course;
  try {
    course = await Course.updateOne(
      {
        _id: courseId,
        usersEnrolled: { $nin: [user._id] },
      },
      { $push: { usersEnrolled: user._id } },
    );
    await User.updateOne(
      {
        _id: user._id,
        enrolledCourses: { $nin: [user._id] },
      },
      { $push: { enrolledCourses: course._id } },
    );
  } catch (error) {
    throw error;
  }
  return course;
}

function deleteOne(itemId, user) {
  //TODO if item not found
  return Course.deleteOne({
    _id: courseId,
    // usersEnrolled: { $nin: [user._id] },
  });
}

module.exports = {
  getAll,
  create,
  findOneById,
  editOne,
  deleteOne,
  bookCourse,
};
