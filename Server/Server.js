// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./utils/dbConnect");
const reviewRoutes = require("./Routes/Review");
const cron = require("node-cron");
const { sendReviewSummary } = require("./Controllers/Notification");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connect();

const app = express();

// Middleware
app.use(express.json());

// ✅ Fixed CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // your React app port
    methods: ["GET", "POST"],
  })
);

console.log("✅ CORS configured for http://localhost:5173");

// Routes
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend server is running successfully!");
});

// Cron job (optional)
cron.schedule("30 10 * * *", async () => {
  console.log("⏰ Running daily review summary task...");
  await sendReviewSummary();
  console.log("✅ Daily summary completed.");
});

// Server start
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
