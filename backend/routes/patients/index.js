const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // ⬅️ You must require bcrypt for hashing
const { PatientModel } = require("../../db/models/patientModel");

router.post("/register", async (req, res) => {
    // Destructure all fields from the request body
    const {
        fullName,
        email,
        password,
        age, 
        gender, 
        contactNumber, // ⬅️ Name used by frontend (req.body)
        address, 
    } = req.body;

    try {
        // Basic validation for required fields
        if (!fullName || !email || !password || !age || !gender || !contactNumber || !address) {
            return res.status(400).json({
                message: "All required fields (Full Name, Email, Password, Age, Gender, Contact Number, Address) must be provided.",
            });
        }

        // Check if user already exists
        const user = await PatientModel.findOne({
            email,
        });
        if (user) {
            return res.status(400).json({
                message: "A user with this email already exists. Please sign in.",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new Patient document with the correct schema field name
        const newUser = new PatientModel({
            fullName: fullName,
            email: email,
            password: hashedPassword,
            age: age, 
            gender: gender, 
            contact: contactNumber, // ⬅️ FIXED: Maps 'contactNumber' from frontend to the required schema field 'contact'
            address: address, 
        });

        // Save to the database
        await newUser.save();

        // Respond with success
        return res.json({
            message: "Patient registered successfully!",
            userId: newUser._id
        });

    } catch (err) {
        console.error("Patient registration error:", err);
        // Add specific validation error handling for better API response
        if (err.name === 'ValidationError') {
             return res.status(400).json({
                message: err.message,
                errors: err.errors
            });
        }
        return res.status(500).json({
            message: "Internal Server Error during registration.",
            error: err.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const user = await PatientModel.findOne({
            email
        });
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // Optionally, remove the password from the user object before sending
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        return res.status(200).json({
            message: "Login successful",
            user: userWithoutPassword
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.get("/getAllPatients", async (req, res) => {
    try {
        const patients = await PatientModel.find().select('-password'); // Exclude passwords
        return res.status(200).json(patients);

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get("/getPatient/:id", async (req, res) => {
    try {
        const patient = await PatientModel.findById(req.params.id).select('-password'); // Exclude password
        if (!patient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }
        return res.status(200).json(patient);
    } catch (err) {
        // Handle invalid MongoDB ID format
        if (err.name === 'CastError') {
            return res.status(400).json({
                message: "Invalid Patient ID format"
            });
        }
        return res.status(500).json({
            message: err.message
        });
    }
});

router.put("/updatePatient/:id", async (req, res) => {
    try {
        const updateData = req.body;

        // Optionally handle password update separately by hashing it if provided
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        // To allow updating 'contactNumber' if the schema uses 'contact'
        if (updateData.contactNumber) {
            updateData.contact = updateData.contactNumber;
            delete updateData.contactNumber;
        }

        const updatedPatient = await PatientModel.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true, // Run schema validators on update
        }).select('-password');

        if (!updatedPatient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        return res.status(200).json(updatedPatient);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


router.delete("/deletePatient/:id", async (req, res) => {
    try {
        const deletedPatient = await PatientModel.findByIdAndDelete(req.params.id);

        if (!deletedPatient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        return res.status(200).json({
            message: "Patient deleted successfully"
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;