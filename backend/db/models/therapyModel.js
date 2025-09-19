const {model} = require('mongoose');
const {therapySchema} = require('../schemas/therapySchema')
const therapy = model("Therapy", therapySchema);
module.exports = {therapyModel : therapy}