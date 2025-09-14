const{ model } = require('mongoose');
const { doctorSchema } = require('../schemas/doctorShema');
const Doctor = model('Doctor', doctorSchema);
module.exports = { DoctorModel: Doctor };
