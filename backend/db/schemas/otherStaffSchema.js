// const mongoose = require("mongoose");

// const otherStaffSchema = new mongoose.Schema({
//     ID: { type: String, required: true, unique: true },
//     fullName: { type: String, required: true },
//     role: { type: String, required: true },
//     contact: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     shiftTimings: { type: String, required: true },
//     department: { type: String, required: true },
// });
// module.exports = { otherStaffSchema };
const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["Receptionist", "Nurse", "LabTechnician", "Admin"], 
    required: true 
  },
  contact: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },  // for login
  shift: { type: String, enum: ["Morning", "Evening", "Night"], default: "Morning" }
}, { timestamps: true });

const Staff = mongoose.model("Staff", StaffSchema);
