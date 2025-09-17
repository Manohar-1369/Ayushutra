const { model } = require('mongoose');
const { doctorSchema } = require('../schemas/doctorShema.js');
const Doctor = model('Doctor', doctorSchema);
module.exports = { DoctorModel: Doctor };



