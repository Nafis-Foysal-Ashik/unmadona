const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  uploadImages,
  getImages,
  deleteImage
} = require("../controllers/homepageImageController");

router.post("/upload", upload.array("images"), uploadImages);
router.get("/all", getImages);
router.delete("/delete/:id", deleteImage);

module.exports = router;