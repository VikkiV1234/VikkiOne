import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
  roll_no: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  Degree: { type: String, required: true },
  admission_quota: { type: String, required: true },
  admission_year: { type: String, required: true },
  college: { type: String, required: true },
});

// Ensure the collection name is explicitly mentioned as "Student_admission"
export default mongoose.model("Admission", AdmissionSchema, "Student_admission");

