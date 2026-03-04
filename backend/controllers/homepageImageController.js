const HomepageImage = require("../models/HomepageImage");
const fs = require("fs");
const path = require("path");

// Upload Image
const uploadImages = async (req, res) => {
  try {
    const images = req.files.map(
      (file) => ({
        imageUrl: `/uploads/${file.filename}`
      })
    );

    await HomepageImage.insertMany(images);

    res.json({ message: "Images Uploaded Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Images
const getImages = async (req, res) => {
  try {
    const images = await HomepageImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Image
const deleteImage = async (req, res) => {
  try {
    const image = await HomepageImage.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    const imagePath = path.join(__dirname, "..", image.imageUrl);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await HomepageImage.findByIdAndDelete(req.params.id);

    res.json({ message: "Image Deleted Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  uploadImages,
  getImages,
  deleteImage
};