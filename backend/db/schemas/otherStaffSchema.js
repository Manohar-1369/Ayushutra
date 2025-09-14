const mongoose = require("mongoose");

const otherStaffSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    role: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    shiftTimings: { type: String, required: true },
    department: { type: String, required: true },
});
module.exports = { otherStaffSchema };