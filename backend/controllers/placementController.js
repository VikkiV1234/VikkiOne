import PlacementModel from "../models/PlacementModell.js";

// Get all placement records
export const getPlacements = async (req, res) => {
    try {
        const placements = await PlacementModel.find();
        res.json(placements);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Get placement record by RollNo
export const getPlacementByRollNo = async (req, res) => {
    try {
        const student = await PlacementModel.findOne({ RollNo: req.params.rollNo });

        if (!student) return res.status(404).json({ message: "Student not found" });

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
