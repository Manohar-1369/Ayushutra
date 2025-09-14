const express = require("express");
const router = express.Router();
const { OtherStaffModel } = require("../../db/models/otherStaffModel");

// Add staff
router.post("/add", async (req, res) => {
    try {
        const newStaff = new OtherStaffModel(req.body);
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all staff
router.get("/", async (req, res) => {
    try {
        const staffList = await OtherStaffModel.find();
        res.status(200).json(staffList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get staff by ID
router.get("/:id", async (req, res) => {
    try {
        const staff = await OtherStaffModel.findById(req.params.id);
        if (!staff) return res.status(404).json({ message: "Staff not found" });
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Update staff by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedStaff = await OtherStaffModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStaff) return res.status(404).json({ message: "Staff not found" });
        res.status(200).json(updatedStaff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Delete staff by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedStaff = await OtherStaffModel.findByIdAndDelete(req.params.id);
        if (!deletedStaff) return res.status(404).json({ message: "Staff not found" });
        res.status(200).json({ message: "Staff deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
