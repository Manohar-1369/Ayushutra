const express = require("express");
const router = express.Router();
const { DoctorModel } = require("../../db/models/doctorModel");

// Add doctor
router.post("/add", async (req, res) => {
  try {
    const doctor = new DoctorModel(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all doctors
router.get("/all", async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get doctor by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorModel.findOne({ doctorID: id });

    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ msg: "Doctor not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//get doctor by specilization
router.get("/", async (req, res) => {
  

  try {
    const filter = {};

    if (req.query.specialization) {
      filter.specialization = req.query.specialization;
    }

    const doctors = await DoctorModel.find(filter);
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update doctor by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedDoctor = await DoctorModel.findOneAndUpdate(
      { doctorID: id },
      updateData,
      { new: true }
    );

    if (updatedDoctor) {
      res.json(updatedDoctor);
    } else {
      res.status(404).json({ msg: "Doctor not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete doctor by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDoctor = await DoctorModel.findOneAndDelete({ doctorID: id });

    if (deletedDoctor) {
      res.json({ msg: "Doctor deleted successfully" });
    } else {
      res.status(404).json({ msg: "Doctor not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
