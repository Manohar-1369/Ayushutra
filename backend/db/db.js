const mongoose = require("mongoose");
require("dotenv").config({path:"./db/.env"})

const connectdb = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL);
       console.log("✅ MongoDB connected");
    }catch(err){
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    }
}

module.exports = connectdb;