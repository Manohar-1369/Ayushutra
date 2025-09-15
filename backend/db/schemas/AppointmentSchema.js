const mongoose=require("mongoose")
// const AppoinmentSchema=new mongoose.Schema({
//     Therapy:{type:String,required:true},
//     Doctor:{type:String,required:true},
//     symptoms:{type:String,required:true},
//     Notification_preference:{type:String}
// })
// module.exports={AppoinmentSchema}
const AppoinmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  
  slot: {
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
  },

  symptoms: { type: String, required: true },
  notification_preference: { 
    type: String, 
    enum: ["Email", "SMS", "None"], 
    default: "Email" 
  },
  status: { type: String, enum: ["Booked", "Completed", "Cancelled"], default: "Booked" }
}, { timestamps: true });

module.exports={AppoinmentSchema}
