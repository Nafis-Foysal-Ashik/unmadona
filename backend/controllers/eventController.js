const Event = require("../models/Event");
const fs = require("fs");
const path = require("path");

// ADD EVENT
const addEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      eventPlace: req.body.eventPlace,
      eventDetails: req.body.eventDetails,
      entryFee: req.body.entryFee || "Free",
      eventCompleted: req.body.eventCompleted === "true",
      image: req.file ? `/uploads/${req.file.filename}` : ""
    });

    await newEvent.save();

    res.json({ message: "Event Added Successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Error adding event",
      error: error.message
    });
  }
};

// GET ALL EVENTS
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching events",
      error: error.message
    });
  }
};

// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.image) {
      const imagePath = path.join(__dirname, "..", event.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Event.findByIdAndDelete(req.params.id);

    res.json({ message: "Event Deleted Successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting event",
      error: error.message
    });
  }
};

// UPDATE EVENT
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (req.file) {
      event.image = `/uploads/${req.file.filename}`;
    }

    event.eventName = req.body.eventName;
    event.eventDate = req.body.eventDate;
    event.eventPlace = req.body.eventPlace;
    event.eventDetails = req.body.eventDetails;
    event.entryFee = req.body.entryFee;
    event.eventCompleted = req.body.eventCompleted === "true";

    await event.save();

    res.json({ message: "Event Updated Successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Error updating event",
      error: error.message
    });
  }
};

module.exports = {
  addEvent,
  getEvents,
  deleteEvent,
  updateEvent
};