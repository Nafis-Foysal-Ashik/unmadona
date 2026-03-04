const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Cloudinary URL later
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);