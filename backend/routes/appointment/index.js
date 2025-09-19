const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const getPatientDetailsMiddleware = require("../../middlewares/getPatientDetails");
const { DoctorModel } = require("../../db/models/doctorModel");
const { AppointmentModel } = require("../../db/models/AppointmentSchemaModel");

// POST /appointment/add
router.post("/add", getPatientDetailsMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { doctorId, slot, symptoms, notification_preference } = req.body;

    // Find doctor in the session
    const doctor = await DoctorModel.findById(doctorId).session(session);
    if (!doctor) throw new Error("Doctor not found");

    // Check if the requested slot is available
    const slotAvailable = doctor.slots.some(
      (s) =>
        s.date.getTime() === new Date(slot.date).getTime() &&
        s.startTime === slot.startTime &&
        !s.isBooked
    );

    if (!slotAvailable) throw new Error("Requested slot is not available");

    // Mark slot as booked
    doctor.slots = doctor.slots.map((s) => {
      if (
        s.date.getTime() === new Date(slot.date).getTime() &&
        s.startTime === slot.startTime
      ) {
        return { ...s.toObject(), isBooked: true };
      }
      return s;
    });

    await doctor.save({ session }); // Save doctor with updated slot in session

    // Create the appointment in the same session
    const appointment = new AppointmentModel({
      patientId: req.patient._id,
      doctorId,
      slot,
      symptoms,
      notification_preference,
    });

    await appointment.save({ session });

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      msg: "Appointment booked successfully",
      appointment,
    });
  } catch (err) {
    // Abort transaction on error
    await session.abortTransaction();
    session.endSession();

    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
