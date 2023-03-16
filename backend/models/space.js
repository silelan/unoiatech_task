const mongoose = require("mongoose");

const SpaceSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const Space = mongoose.model("Space", SpaceSchema);

module.exports = { Space };