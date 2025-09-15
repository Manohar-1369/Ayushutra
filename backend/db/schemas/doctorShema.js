const mongoose = require("mongoose");
// const doctorSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     specialization: { type: String, required: true },
//     experience: { type: Number, required: true },
//     contact: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     availability: { type: String, required: true },
// });
// module.exports = { doctorSchema };
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contact: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  
  // slots available for booking
  slots: [{
    date: { type: Date, required: true },
    startTime: { type: String, required: true }, // e.g. "10:00" 
    endTime: { type: String, required: true },   // e.g. "10:30"
    isBooked: { type: Boolean, default: false }
  }]
}, { timestamps: true });
module.exports = { doctorSchema };

