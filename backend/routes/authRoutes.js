import express from "express";
import { registerUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;






  //new login page

/*import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import StudentModel from "../models/StudentModel.js";
import AdminModel from "../models/LoginAdminModel.js";

const router = express.Router();

// 🔹 Student Login
router.post("/student/login", async (req, res) => {
    const { RollNo, password } = req.body;
    
    try {
        const student = await StudentModel.findOne({ RollNo });
        if (!student) return res.status(401).json({ message: "Student not found" });

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ role: "student", RollNo }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// 🔹 Admin Login
router.post("/admin/login", async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const admin = await AdminModel.findOne({ username });
        if (!admin) return res.status(401).json({ message: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ role: "admin", username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

export default router;*/
