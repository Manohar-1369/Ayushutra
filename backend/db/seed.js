const connectdb = require("./db");
const { DoctorModel } = require("./models/doctorModel");
const { PatientModel } = require("./models/patientModel");
const { doctors, patients } = require("./dummy");

const seed = async () => {
  await connectdb();

  await DoctorModel.deleteMany({});
  await PatientModel.deleteMany({});

  await DoctorModel.insertMany(doctors);
  await PatientModel.insertMany(patients);

  console.log("✅ Database seeded!");
  process.exit(0);
};

seed();
