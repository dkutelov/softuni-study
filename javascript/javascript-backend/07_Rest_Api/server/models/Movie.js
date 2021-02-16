const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  description: String,
  image: String,
  genres: String,
  tickets: Number,
});

module.exports = model("Movie", movieSchema);
