const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    patientID: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    medicalHistory: { type: String, required: false },
    currentMedications: { type: String, required: false },
    EmergencyContact: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },

});
module.exports = { patientSchema };
