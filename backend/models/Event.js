const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true
    },
    eventDate: {
      type: Date,
      required: true
    },
    eventPlace: {
      type: String,
      required: true
    },
    eventDetails: {
      type: String
    },
    entryFee: {
      type: String,
      default: "Free"
    },
    eventCompleted: {
      type: Boolean,
      default: false
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);