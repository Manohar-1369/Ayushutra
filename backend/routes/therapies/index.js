const express = require("express");
const {therapyModel }= require("../../db/models/therapyModel");

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const therapy = new therapyModel(req.body);
    await therapy.save();
    res.status(201).json({ msg: "Therapy created successfully", therapy });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const { dosha, symptom } = req.query;

    let query = {};
    if (dosha) query.recommendedForDoshas = dosha;
    if (symptom) query.symptoms = { $in: [symptom] };

    const therapies = await therapyModel.find(query);
    res.status(200).json(therapies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const therapy = await therapyModel.findById(req.params.id);
    if (!therapy) return res.status(404).json({ msg: "Therapy not found" });
    res.status(200).json(therapy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const therapy = await therapyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!therapy) return res.status(404).json({ msg: "Therapy not found" });
    res.status(200).json({ msg: "Therapy updated", therapy });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const therapy = await therapyModel.findByIdAndDelete(req.params.id);
    if (!therapy) return res.status(404).json({ msg: "Therapy not found" });
    res.status(200).json({ msg: "Therapy deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
