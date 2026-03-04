const Notice = require("../models/Notice");

// Save Notice
const saveNotice = async (req, res) => {
  try {
    const { noticeText } = req.body;

    if (!noticeText) {
      return res.status(400).json({
        message: "Notice text is required"
      });
    }

    // Remove old notice
    await Notice.deleteMany();

    const newNotice = new Notice({
      noticeText
    });

    await newNotice.save();

    res.json({ message: "Notice Saved Successfully" });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// ✅ ADD THIS FUNCTION
const getNotice = async (req, res) => {
  try {
    const notice = await Notice.findOne().sort({ createdAt: -1 });
    res.json(notice);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  saveNotice,
  getNotice
};