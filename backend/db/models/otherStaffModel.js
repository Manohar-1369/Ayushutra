const {model} = require('mongoose');
const { otherStaffSchema } = require('../schemas/otherStaffSchema');
const OtherStaff = model('OtherStaff', otherStaffSchema);
module.exports = { OtherStaffModel: OtherStaff };
