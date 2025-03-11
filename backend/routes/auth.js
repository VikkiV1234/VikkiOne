const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Student Registration Route
router.post("/register", async (req, res) => {
    try {
        const { name, rollNo, password, role } = req.body;

        let existingUser = await User.findOne({ rollNo });
        if (existingUser) {
            return res.status(400).json({ error: "Student already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, rollNo, password: hashedPassword, role });

        await newUser.save();
        res.status(201).json({ message: "Student registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
