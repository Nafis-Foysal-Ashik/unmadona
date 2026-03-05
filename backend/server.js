const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const testRoutes = require("./routes/testRoutes");
const studentRoutes = require("./routes/studentRoutes");
const eventRoutes = require("./routes/eventRoutes");
const cors = require("cors");
const homepageImageRoutes = require("./routes/homepageImageRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

dotenv.config();
connectDB();

const app = express();

/* CORS FIX */
app.use(
  cors({
    origin: "https://unmadona.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});