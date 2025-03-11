import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  RollNo: { type: String, required: true },
  StudentName: { type: String, required: true },
  Semester: { type: Number, required: true },
  SubjectCode: { type: String, required: true },
  SubjectTitle: { type: String, required: true },
  SemesterMarks: { type: Number, required: true },
  YearMonth: { type: String, required: true },
  CreditPoints: { type: Number, required: true },
  GradePoints: { type: Number, required: true },
  CGPA: { type: Number, default: 0 },
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;
