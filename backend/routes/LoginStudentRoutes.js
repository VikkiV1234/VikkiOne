import express from "express";
import bcrypt from "bcryptjs";
import LoginStudentModel from "../models/LoginStudentModel.js";

const router = express.Router();

// Student Login API
router.post("/", async (req, res) => {
    const { RollNo, password } = req.body;

    try {
        const student = await LoginStudentModel.findOne({ RollNo });

        if (!student) {
            return res.status(404).json({ message: "❌ Student not found" });
        }

        // For security, passwords should be hashed, but for now, checking as plaintext
        if (student.password !== password) {
            return res.status(401).json({ message: "⚠️ Invalid credentials" });
        }

        res.json({
            StudentName: student.StudentName,
            RollNo: student.RollNo,
            CGPA: student.cgpa,
            PlacementDetails: student.placement_details,
            AdmissionDetails: student.admission_details
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

export default router;
