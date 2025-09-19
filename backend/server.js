const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");

// Routes
const doctorRoutes = require("./routes/doctors");
const patientRoutes = require("./routes/patients");
const otherStaffRoutes = require("./routes/otherStaff");
const appointmentRoutes = require("./routes/appointment");
const therapyRoutes = require("./routes/therapies")
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/otherstaff", otherStaffRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/therapy",therapyRoutes)

// Connect DB & start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
