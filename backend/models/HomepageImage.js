const mongoose = require("mongoose");

const homepageImageSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomepageImage", homepageImageSchema);