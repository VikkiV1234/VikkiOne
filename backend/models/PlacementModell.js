import mongoose from "mongoose";

const PlacementSchema = new mongoose.Schema(
    {
        StudentName: { type: String, required: true },
        RollNo: { type: String, required: true, unique: true },
        company_name: { type: String, required: true },
        designation: { type: String, required: true },
        package: { type: String, required: true },
        placement_date: { type: String, required: true } // Ensure this is a string if 'NIL'
    },
    { collection: "Placement" } // ✅ Ensure it matches the MongoDB collection name
);

const PlacementModel = mongoose.model("Placement", PlacementSchema);
export default PlacementModel;
