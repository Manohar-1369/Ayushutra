function getWeeklySlots(startHour, endHour) {
  const slots = [];
  const now = new Date();

  for (let i = 0; i < 7; i++) {
    const day = new Date();
    day.setDate(now.getDate() + i);  

    for (let hour = startHour; hour < endHour; hour++) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;

      slots.push({
        date: new Date(day),   
        startTime,
        endTime,
        isBooked: false,
      });
    }
  }

  return slots;
}

module.exports = getWeeklySlots;