const { model } = require('mongoose');
const { doctorSchema } = require('../schemas/doctorSchema');
const Doctor = model('Doctor', doctorSchema);
module.exports = { DoctorModel: Doctor };



