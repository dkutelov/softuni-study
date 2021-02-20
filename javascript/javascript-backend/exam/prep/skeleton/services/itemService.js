const mongoose = require("mongoose");
const Item = require("../models/Item");
const User = require("../models/User");

async function getAll(user, query) {
  // authenticated user
  if (user) {
    let items = await Item.find({})
      .select("title description")
      .sort("-title")
      .lean();

    if (query.searchTerm) {
      items = items.filter((c) =>
        c.title.toLowerCase().includes(query.searchTerm),
      );
    }

    return items;
  }

  // guest user
  return Item.find({})
    .sort({
      title: -1,
    })
    .select("title desciption")
    .limit(3)
    .lean();
}

async function create(data, user) {
  const { title } = data;

  const itemExists = await Item.findOne({ title });
  if (itemExists) throw { message: "Course with this title already exists!" };
  return new Item({ ...data, creator: user._id }).save();
}

async function findOneById(itemId, user) {
  let item;
  try {
    item = await Item.findById(itemId).lean();
    // course.isEnrolled = course.usersEnrolled.find(
    //     (u) => u.toString() === user._id
    // );
    // course.isCreator = user._id === course.creator.toString();
  } catch (error) {
    throw error;
  }
  return item;
}

function editOne(itemId, data) {
  return Item.updateOne({ _id: itemId }, data, {
    new: true,
  }).lean();
}

// async function bookCourse(courseId, user) {
//     let course;
//     try {
//         course = await Course.updateOne(
//             {
//                 _id: courseId,
//                 usersEnrolled: { $nin: [user._id] },
//             },
//             { $push: { usersEnrolled: user._id } }
//         );
//         await User.updateOne(
//             {
//                 _id: user._id,
//                 enrolledCourses: { $nin: [user._id] },
//             },
//             { $push: { enrolledCourses: course._id } }
//         );
//     } catch (error) {
//         throw error;
//     }
//     return course;
// }

function deleteOne(itemId, user) {
  //TODO if item not found
  return Item.deleteOne({
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
  // bookCourse,
};
