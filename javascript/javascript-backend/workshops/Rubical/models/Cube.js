const { Schema, Types, model } = require("mongoose");

const cubeShema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: /^https?/,
      message: "Image url shout start with http or https!",
    },
  },
  difficultyLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 6,
  },
  accessories: [
    {
      type: Types.ObjectId,
      ref: "Accessory",
    },
  ],
  creatorId: {
    type: Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Cube", cubeShema);

// const path = require("path");
// const fs = require("fs/promises");
// const productsData = require("../data/products.json");
// const Model = require("./Model");

// class Cube extends Model {
//   constructor(id, name, description, imageUrl, difficultyLevel) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.difficultyLevel = difficultyLevel;
//   }
// }

// module.exports = Cube;
