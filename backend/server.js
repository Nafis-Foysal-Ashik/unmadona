const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const testRoutes = require("./routes/testRoutes");
const studentRoutes = require("./routes/studentRoutes");
const eventRoutes = require("./routes/eventRoutes");
const homepageImageRoutes = require("./routes/homepageImageRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration (allow Vercel frontend)
app.use(
  cors({
    origin: "https://unmadona.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Root route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// API Routes
app.use("/api", testRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/homepage-images", homepageImageRoutes);
app.use("/api/notice", noticeRoutes);

// Port configuration (Render compatible)
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
