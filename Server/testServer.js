const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Step 1: Explicitly allow Vite dev server
app.use(cors({
  origin: "http://localhost:5173", // your React app
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Step 2: Middleware to confirm headers are applied
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// ✅ Step 3: Simple test route
app.get("/test", (req, res) => {
  res.json({ message: "CORS working ✅" });
});

// ✅ Step 4: Start server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Test server running on port ${PORT}`);
});
