import mongoose from "mongoose";

const LoginStudentSchema = new mongoose.Schema(
    {
        StudentName: String,
        RollNo: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        cgpa: String,
        placement_details: Object,
        admission_details: Object
    },
    { collection: "students" } // Ensure it connects to the correct collection
);

const LoginStudentModel = mongoose.model("LoginStudent", LoginStudentSchema);
export default LoginStudentModel;
