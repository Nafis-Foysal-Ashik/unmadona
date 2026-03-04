const express = require("express");
const router = express.Router();

const {
  saveNotice,
  getNotice
} = require("../controllers/noticeController");

router.post("/save", saveNotice);
router.get("/get", getNotice);

module.exports = router;