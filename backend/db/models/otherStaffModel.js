const {model} = require('mongoose');
const { StaffSchema } = require("../schemas/otherStaffSchema.js");
const OtherStaff = model('OtherStaff', StaffSchema);
module.exports = { OtherStaffModel: OtherStaff };


