const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema({
  id: Types.ObjectId,
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

// userSchema.pre("save", function (next) {});

module.exports = model("User", userSchema);
