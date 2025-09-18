const cron = require("node-cron");
const Doctor = require("./models/doctorModel");

cron.schedule("0 0 * * *", async () => {
  console.log("⏰ Running midnight slot update...");

  const doctors = await Doctor.find();

  for (const doctor of doctors) {
    // Keep today's and future slots
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    doctor.slots = doctor.slots.filter((slot) => slot.date >= today);

    // Add slots for the new 7th day
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + 6);

    for (let hour = 10; hour < 17; hour++) {
      doctor.slots.push({
        date: newDay,
        startTime: `${hour.toString().padStart(2, "0")}:00`,
        endTime: `${(hour + 1).toString().padStart(2, "0")}:00`,
        isBooked: false,
      });
    }

    await doctor.save();
  }

  console.log("✅ Doctor slots refreshed for next 7 days");
});
