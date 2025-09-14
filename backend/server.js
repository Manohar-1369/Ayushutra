const mongoose = require("mongoose");
require("dotenv").config({ path: "./db/.env" });
const express = require("express");
const cors = require("cors");

const doctorRoutes = require("./routes/doctors");
const patientRoutes = require("./routes/patients");
const otherStaffRoutes = require("./routes/otherStaff");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/otherstaff", otherStaffRoutes);


mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
});
