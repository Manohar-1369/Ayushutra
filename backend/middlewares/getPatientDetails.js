const jwt = require("jsonwebtoken");
const { PatientModel } = require("../db/models/patientModel");



const getPatientDetailsMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; 
    if (!authHeader) return res.status(401).json({ msg: "No token provided" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "Token missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const patient = await PatientModel.findOne({ email: decoded.email }); 
    if (!patient) return res.status(404).json({ msg: "Patient not found" });

    req.patient = patient; 
    next(); 
  } catch (e) {
    res.status(401).json({ msg: "Invalid token", error: e.message });
  }
};

module.exports = getPatientDetailsMiddleware;
