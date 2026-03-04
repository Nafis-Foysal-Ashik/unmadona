const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload"); // ✅ IMPORT THIS

const {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent
} = require("../controllers/studentController");

// Add Student
router.post("/add-student", upload.single("image"), addStudent);

// Get All Students
router.get("/all", getStudents);

// Delete Student
router.delete("/delete/:id", deleteStudent);

// Update Student
router.put("/update/:id", upload.single("image"), updateStudent);

module.exports = router;