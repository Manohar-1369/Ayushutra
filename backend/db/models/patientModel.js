const {model} = require('mongoose');
const { patientSchema } = require('../schemas/patientSchema');
const Patient = model('Patient', patientSchema);
module.exports = { PatientModel: Patient };

