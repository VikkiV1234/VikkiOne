import express from "express";
import PlacementModel from "../models/PlacementModell.js";

const router = express.Router();

// ✅ Get all placement records
router.get("/", async (req, res) => {
    try {
        const placements = await PlacementModel.find({});
        if (placements.length === 0) {
            return res.status(404).json({ message: "No placement records available." });
        }
        res.json(placements);
    } catch (error) {
        console.error("Error fetching placements:", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// ✅ Get placement details by Roll No
router.get("/:rollNo", async (req, res) => {
    try {
        const student = await PlacementModel.findOne({ RollNo: req.params.rollNo });

        if (!student) {
            console.warn(`Student not found for Roll No: ${req.params.rollNo}`);
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        console.error("Error fetching student:", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

export default router;


//filter

/*import express from "express";
import PlacementModel from "../models/PlacementModell.js"; 

const router = express.Router();

// ✅ Get all placements
router.get("/", async (req, res) => {
    try {
        const placements = await PlacementModel.find(); // ✅ Fetch all records

        console.log("📊 Placements Fetched:", placements); // 🔍 Log fetched data

        if (!placements || placements.length === 0) {
            return res.status(404).json({ message: "No placement records available." });
        }

        res.json(placements);
    } catch (error) {
        console.error("⚠️ Error fetching placements:", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// ✅ Get placement by Roll No
router.get("/:rollNo", async (req, res) => {
    try {
        console.log("🔍 Searching for Roll No:", req.params.rollNo);

        const student = await PlacementModel.findOne({ RollNo: req.params.rollNo });

        console.log("🎓 Student Found:", student); // 🔍 Log fetched data

        if (!student) {
            console.warn("⚠️ Student not found for Roll No:", req.params.rollNo);
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        console.error("⚠️ Error fetching student by Roll No:", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

export default router;*/
