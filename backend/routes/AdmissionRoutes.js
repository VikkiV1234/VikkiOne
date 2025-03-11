/*import express from "express";
import Admission from "../models/AdmissionModel.js"; // Import model

const router = express.Router();

// ✅ GET all student admission details
router.get("/", async (req, res) => {
  try {
    const admissions = await Admission.find(); // Ensure 'find()' is called on Mongoose model
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;*/
import express from "express";
import Admission from "../models/AdmissionModel.js"; // Correct import

const router = express.Router();

// ✅ Get all student admissions
router.get("/", async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get a specific student by roll_no
router.get("/:roll_no", async (req, res) => {
  try {
    const student = await Admission.findOne({ roll_no: req.params.roll_no });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
