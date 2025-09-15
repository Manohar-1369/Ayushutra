const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },

});
module.exports = { patientSchema };
