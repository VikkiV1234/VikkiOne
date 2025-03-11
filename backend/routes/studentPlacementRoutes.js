import express from "express";
import {
  getAllStudents,
  getPlacedStudents,
  getNonPlacedStudents,
  getStudentByRollNo
} from "../controllers/studentPlacementControllers.js";

const router = express.Router();

router.get("/", getAllStudents);              // ✅ Get all students
router.get("/placed", getPlacedStudents);     // ✅ Get placed students
router.get("/non-placed", getNonPlacedStudents); // ✅ Get non-placed students
router.get("/:rollNo", getStudentByRollNo);   // ✅ Get student by RollNo

export default router;
