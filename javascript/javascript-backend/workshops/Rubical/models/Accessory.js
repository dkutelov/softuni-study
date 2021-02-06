const mongoose = require("mongoose");

const accessorySchema = mongoose.Schema({
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
});

module.exports = mongoose.model("Accessory", accessorySchema);

// const Model = require("./Model");

// class Accessories extends Model {}

// module.exports = Accessories;
