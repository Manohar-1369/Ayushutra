const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    doctorID: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    availability: { type: String, required: true },
});
module.exports = { doctorSchema };
