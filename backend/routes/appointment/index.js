const express = require("express");
const mongoose = require("mongoose");
const doctorModel = require("../../db/models/doctorModel");
const patientModel = require("../../db/models/patientModel");
const appointmentModel = require("../../db/models/AppointmentSchemaModel")
const router = express.Router();

router.post("/add",async (req,res)=>{
    const session = await mongoose.startSession()
    session.startTransaction();
try{
    const { patientId, doctorId, slot, symptoms, notification_preference }= req.body;

    const doctor = await doctorModel.findById(doctorId);
    if(!doctor) throw new Error("doctor not found");

    const patient = await patientModel.findById(patientId);
    if(!patient) throw new Error("patient not found");

    //logic to check availability

    const appointment = new appointmentModel({ patientId, doctorId, slot, symptoms, notification_preference });
    appointment.save();
    
 await session.commitTransaction();
 session.endSession();

 res.status(201).json({msg : "Appointment booked successfully",appointment});
}catch(e){
    await session.abortTransaction;
    session.endSession();
    res.status(400).json({error : err.message});

}

})

module.exports = router;