import StudentPlacement from "../models/studentPlacementModell.js";

// ✅ Fetch all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentPlacement.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Fetch Placed Students (Only students with a valid company_name)
export const getPlacedStudents = async (req, res) => {
  try {
    const placedStudents = await StudentPlacement.find({
      company_name: { $nin: ["NIL", "", null] } // Exclude NIL, empty, and null values
    });

    if (!placedStudents || placedStudents.length === 0) {
      return res.status(404).json({ message: "No Placed Students Found" });
    }

    res.status(200).json(placedStudents);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Fetch Non-Placed Students (Only students where company_name is NIL or empty)
export const getNonPlacedStudents = async (req, res) => {
  try {
    const nonPlacedStudents = await StudentPlacement.find({
      company_name: { $in: ["NIL", "", null] } // Include only NIL, empty, and null values
    });

    if (!nonPlacedStudents || nonPlacedStudents.length === 0) {
      return res.status(404).json({ message: "No Non-Placed Students Found" });
    }

    res.status(200).json(nonPlacedStudents);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Fetch Student by Roll Number
export const getStudentByRollNo = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const student = await StudentPlacement.findOne({ RollNo: rollNo });

    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
