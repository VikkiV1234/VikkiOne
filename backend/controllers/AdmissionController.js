import Student from "../models/AdmissionModel.js";

// Fetch all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find(); // Get all student records
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error" });
  }
};
