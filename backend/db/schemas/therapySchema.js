const mongoose = require("mongoose");

const therapySchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Panchakarma", "Abhyanga", "Shirodhara", "Other"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  recommendedForDoshas: [
    {
      type: String,
      enum: ["Vata", "Pitta", "Kapha"],
    },
  ],
  symptoms: {
    type: [String],
    default: [],
    // e.g., ["stress", "insomnia", "joint pain", "indigestion"]
  },
  duration: {
    days: { type: Number, required: true },
    sessionTime: { type: String },
  },
  price: {
    type: Number,
    required: true,
  },
  contraindications: {
    type: [String],
    default: [],
  },
});

//const TherapyModel = mongoose.model("Therapy", TherapySchema);

module.exports = { therapySchema };
