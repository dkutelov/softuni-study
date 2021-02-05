const mongoose = require("mongoose");

const cubeShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    validate: /^https?/,
  },
  difficultyLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 6,
  },
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Accessory",
    },
  ],
});

module.exports = mongoose.model("Cube", cubeShema);

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
