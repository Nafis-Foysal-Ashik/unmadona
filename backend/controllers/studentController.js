const Student = require("../models/Student");
const fs = require("fs");
const path = require("path");

// Add Student
const addStudent = async (req, res) => {
  try {
    const {
      name,
      university,
      college,
      school,
      bloodGroup,
      mobile,
      presentAddress,
      permanentAddress,
      image
    } = req.body;

    const newStudent = new Student({
      name,
      university,
      college,
      school,
      bloodGroup,
      mobile,
      presentAddress,
      permanentAddress,
      image: req.file ? `/uploads/${req.file.filename}` : ""
    });

    await newStudent.save();

    res.status(201).json({
      message: "Student Added Successfully",
      student: newStudent
    });

  } catch (error) {
    res.status(500).json({
      message: "Error adding student",
      error: error.message
    });
  }
};


const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
      error: error.message
    });
  }
};



// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Delete image file if exists
    if (student.image) {
      const imagePath = path.join(__dirname, "..", student.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Student.findByIdAndDelete(req.params.id);

    res.json({ message: "Student Deleted Successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error: error.message
    });
  }
};

// Update Student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // If new image uploaded
    if (req.file) {
      student.image = `/uploads/${req.file.filename}`;
    }

    student.name = req.body.name;
    student.university = req.body.university;
    student.college = req.body.college;
    student.school = req.body.school;
    student.bloodGroup = req.body.bloodGroup;
    student.mobile = req.body.mobile;
    student.presentAddress = req.body.presentAddress;
    student.permanentAddress = req.body.permanentAddress;

    await student.save();

    res.json({ message: "Student Updated Successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Error updating student",
      error: error.message
    });
  }
};

module.exports = {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent
};