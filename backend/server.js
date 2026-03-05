const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const testRoutes = require("./routes/testRoutes");
const studentRoutes = require("./routes/studentRoutes");
const eventRoutes = require("./routes/eventRoutes");
const homepageImageRoutes = require("./routes/homepageImageRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

dotenv.config();
connectDB();

const app = express();

/* CORS FIX */
app.use(
  cors({
    origin: ["https://unmadona.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api", testRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/homepage-images", homepageImageRoutes);
app.use("/api/notice", noticeRoutes);

/* REMOVE app.listen() for Vercel */
module.exports = app;