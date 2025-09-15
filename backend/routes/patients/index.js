const express = require("express");
const router = express.Router();
const { PatientModel } = require("../../db/models/patientModel");


// Add patient
    router.post("/register",async(req,res)=>{
        
        try{
            const  rebody = req.body;
             const newUser=new PatientModel({
                    rebody
            })
            if(!newUser){
                return res.status(400).json({message:"User already exists"})
            }

            await newUser.save();

            return res.json({message:"User created"})

        }catch(err){
            return res.status(500).json({message:err.message})
        }
        
    })

    router.post("/login",async(req,res)=>{
        try{
            const {email,password}=req.body;
            if(!email || !password){
                return res.status(400).json({message:"All fields are required"});
            }
            const user=await PatientModel.findOne({email});
            if(!user){
                return res.status(400).json({message:"User not found"});
            }
            const isPasswordValid=await bcrypt.compare(password,user.password);
            if(!isPasswordValid){
                return res.status(400).json({message:"Invalid credentials"});
            }

            return res.status(200).json({message:"Login successful",user});

        }catch(err){
            return res.status(500).json({ message: err.message });
        }
    })

    router.get("/getAllPatients",async(req,res)=>{
        try{
            const patients=await PatientModel.find();
            return res.status(200).json(patients);  

        }catch(err){
            return res.status(500).json({ message: err.message });
        }
    })

    router.get("/getPatient/:id",async(req,res)=>{
        try{
            const patient=await PatientModel.findById(req.params.id); 
            return res.status(200).json(patient);  
        }catch(err){
            return res.status(500).json({ message: err.message });
        }
    });

    router.put("/updatePatient/:id",async(req,res)=>{
        try{
            const updatedPatient=await  PatientModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return res.status(200).json(updatedPatient);  
        }catch(err){
            return res.status(500).json({ message: err.message });
        }  
    })

    router.delete("/deletePatient/:id",async(req,res)=>{
        try{
            await PatientModel.findByIdAndDelete(req.params.id);        
            return res.status(200).json({message:"Patient deleted successfully"});  
        }
        catch(err){
            return res.status(500).json({ message: err.message });
        }
    })

module.exports = router;
