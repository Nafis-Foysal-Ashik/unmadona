const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  addEvent,
  getEvents,
  deleteEvent,
  updateEvent
} = require("../controllers/eventController");

// Add Event
router.post("/add", upload.single("image"), addEvent);

// Get All Events
router.get("/all", getEvents);

// Delete Event
router.delete("/delete/:id", deleteEvent);

// Update Event
router.put("/update/:id", upload.single("image"), updateEvent);

module.exports = router;