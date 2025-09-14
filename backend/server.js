const mongoose = require("mongoose");
require("dotenv").config({ path: "./db/.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const { DoctorModel } = require("./db/models/doctorModel");
const { PatientModel } = require("./db/models/patientModel");
const { OtherStaffModel } = require("./db/models/otherStaffModel");
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
    ssl: true, // still keep this for Atlas TLS
})
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



// Add new doctor
app.post("/doctors", async (req, res) => {
  try {
    const doctor = new DoctorModel(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
