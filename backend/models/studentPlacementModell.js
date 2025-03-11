import mongoose from "mongoose";

const studentPlacementSchema = new mongoose.Schema(
  {
    StudentName: { type: String, required: true },
    RollNo: { type: String, required: true, unique: true },
    company_name: { type: String, default: "NIL" },
    designation: { type: String, default: "NIL" },
    package: { type: String, default: "NIL" },
    placement_date: { type: String, default: "NIL" }
  },
  { collection: "Placement" } // Ensure it points to "Placement" (not "placements")
);

const StudentPlacement = mongoose.model("StudentPlacement", studentPlacementSchema, "Placement");

export default StudentPlacement;
