const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    noticeText: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);