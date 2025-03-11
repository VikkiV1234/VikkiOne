

/*import express from "express"; 
import PDFDocument from "pdfkit";
import Student from "../models/Students.js";

const router = express.Router();

// ✅ Get all students with SGPA and CGPA
router.get("/all", async (req, res) => {
  try {
    const students = await Student.find();
    let studentDataList = [];

    students.forEach(student => {
      let studentData = {
        RollNo: student.RollNo,
        StudentName: student.StudentName,
        Semesters: {},
        SGPA_Details: [],
        TotalSGPA: 0,
        TotalCredits: 0,
        CGPA: 0,
      };

      students.forEach(subject => {
        let semester = subject.Semester;
        if (!studentData.Semesters[semester]) {
          studentData.Semesters[semester] = { totalGradePoints: 0, totalCredits: 0 };
        }

        let gradePoint = (subject.SemesterMarks / 10) * subject.CreditPoints;
        studentData.Semesters[semester].totalGradePoints += gradePoint;
        studentData.Semesters[semester].totalCredits += subject.CreditPoints;
      });

      Object.keys(studentData.Semesters).forEach(semester => {
        let { totalGradePoints, totalCredits } = studentData.Semesters[semester];
        if (totalCredits > 0) {
          let sgpa = (totalGradePoints / totalCredits).toFixed(2);
          studentData.SGPA_Details.push({ semester, SGPA: parseFloat(sgpa) });
          studentData.TotalSGPA += totalGradePoints;
          studentData.TotalCredits += totalCredits;
        }
      });

      studentData.CGPA = studentData.TotalCredits ? (studentData.TotalSGPA / studentData.TotalCredits).toFixed(2) : 0;
      studentDataList.push(studentData);
    });

    res.json(studentDataList);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student data", error });
  }
});

// ✅ Get a student by Roll No (with SGPA & CGPA for all semesters)
router.get("/:rollNo", async (req, res) => {
  try {
    const { rollNo } = req.params;
    const studentSubjects = await Student.find({ RollNo: rollNo });

    if (!studentSubjects.length) {
      return res.status(404).json({ message: "Student not found" });
    }

    let studentData = {
      RollNo: rollNo,
      StudentName: studentSubjects[0].StudentName,
      Semesters: {},
      SGPA_Details: [],
      TotalSGPA: 0,
      TotalCredits: 0,
      CGPA: 0,
    };

    studentSubjects.forEach(subject => {
      let semester = subject.Semester;
      if (!studentData.Semesters[semester]) {
        studentData.Semesters[semester] = { totalGradePoints: 0, totalCredits: 0 };
      }

      let gradePoint = (subject.SemesterMarks / 10) * subject.CreditPoints;
      studentData.Semesters[semester].totalGradePoints += gradePoint;
      studentData.Semesters[semester].totalCredits += subject.CreditPoints;
    });

    Object.keys(studentData.Semesters).forEach(semester => {
      let { totalGradePoints, totalCredits } = studentData.Semesters[semester];
      if (totalCredits > 0) {
        let sgpa = (totalGradePoints / totalCredits).toFixed(2);
        studentData.SGPA_Details.push({ semester, SGPA: parseFloat(sgpa) });
        studentData.TotalSGPA += totalGradePoints;
        studentData.TotalCredits += totalCredits;
      }
    });

    studentData.CGPA = studentData.TotalCredits ? (studentData.TotalSGPA / studentData.TotalCredits).toFixed(2) : 0;
    res.json(studentData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student data", error });
  }
});

// ✅ Download Student Marks as PDF (Individual & Overall Semesters)
router.get("/download/:rollNo/:semester", async (req, res) => {
  try {
    const { rollNo, semester } = req.params;
    console.log(`📥 Download request for Roll No: ${rollNo}, Semester: ${semester}`);

    let subjects;

    if (semester.toLowerCase() === "overall") {
      subjects = await Student.find({ RollNo: rollNo }).sort({ Semester: 1 });
    } else {
      subjects = await Student.find({ RollNo: rollNo, Semester: parseInt(semester) });
    }

    if (!subjects || subjects.length === 0) {
      console.log("❌ No subjects found");
      return res.status(404).json({ message: "No subjects found" });
    }

    console.log("✅ Student and subjects found, generating PDF...");

    const doc = new PDFDocument({ size: "A4" });
    res.setHeader("Content-Disposition", `attachment; filename=${semester}_MarkSheet.pdf`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Background color
    doc.rect(0, 0, doc.page.width, doc.page.height).fill("#D3D3D3");
    doc.fillColor("black");

    // Header
    doc.fontSize(18).text("Kumaraguru College of Technology", { align: "center" });
    doc.fontSize(14).text("Batch: 2023-2025", { align: "center" }).moveDown();

    // Student Info
    doc.fontSize(12).text(`Name: ${subjects[0].StudentName}`);
    doc.text(`Roll No: ${subjects[0].RollNo}`).moveDown();

    let currentSemester = null;
    subjects.forEach(subject => {
      if (semester.toLowerCase() === "overall" && currentSemester !== subject.Semester) {
        doc.moveDown();
        doc.fontSize(14).text(`Semester ${subject.Semester}`, { underline: true }).moveDown();
        currentSemester = subject.Semester;
      }
      doc.fontSize(12).text(`${subject.SubjectTitle}: ${subject.SemesterMarks} marks`);
    });

    doc.end();
    console.log("✅ PDF generated successfully!");
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    res.status(500).json({ message: "Error generating PDF", error });
  }
});

export default router;*/


/*import express from "express";
import PDFDocument from "pdfkit";
import Student from "../models/Students.js";

const router = express.Router();

// ✅ Get all students with SGPA and CGPA
router.get("/all", async (req, res) => {
  try {
    const students = await Student.find();
    let studentDataList = [];

    students.forEach(student => {
      let studentData = {
        RollNo: student.RollNo,
        StudentName: student.StudentName,
        Semesters: {},
        SGPA_Details: [],
        TotalSGPA: 0,
        TotalCredits: 0,
        CGPA: 0,
      };

      students.forEach(subject => {
        let semester = subject.Semester;
        if (!studentData.Semesters[semester]) {
          studentData.Semesters[semester] = { totalGradePoints: 0, totalCredits: 0 };
        }

        let gradePoint = (subject.SemesterMarks / 10) * subject.CreditPoints;
        studentData.Semesters[semester].totalGradePoints += gradePoint;
        studentData.Semesters[semester].totalCredits += subject.CreditPoints;
      });

      Object.keys(studentData.Semesters).forEach(semester => {
        let { totalGradePoints, totalCredits } = studentData.Semesters[semester];
        if (totalCredits > 0) {
          let sgpa = (totalGradePoints / totalCredits).toFixed(2);
          studentData.SGPA_Details.push({ semester, SGPA: parseFloat(sgpa) });
          studentData.TotalSGPA += totalGradePoints;
          studentData.TotalCredits += totalCredits;
        }
      });

      studentData.CGPA = studentData.TotalCredits ? (studentData.TotalSGPA / studentData.TotalCredits).toFixed(2) : 0;
      studentDataList.push(studentData);
    });

    res.json(studentDataList);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student data", error });
  }
});

// ✅ Get a student by Roll No (with SGPA & CGPA for all semesters)
router.get("/:rollNo", async (req, res) => {
  try {
    const { rollNo } = req.params;
    const studentSubjects = await Student.find({ RollNo: rollNo });

    if (!studentSubjects.length) {
      return res.status(404).json({ message: "Student not found" });
    }

    let studentData = {
      RollNo: rollNo,
      StudentName: studentSubjects[0].StudentName,
      Semesters: {},
      SGPA_Details: [],
      TotalSGPA: 0,
      TotalCredits: 0,
      CGPA: 0,
    };

    studentSubjects.forEach(subject => {
      let semester = subject.Semester;
      if (!studentData.Semesters[semester]) {
        studentData.Semesters[semester] = { totalGradePoints: 0, totalCredits: 0 };
      }

      let gradePoint = (subject.SemesterMarks / 10) * subject.CreditPoints;
      studentData.Semesters[semester].totalGradePoints += gradePoint;
      studentData.Semesters[semester].totalCredits += subject.CreditPoints;
    });

    Object.keys(studentData.Semesters).forEach(semester => {
      let { totalGradePoints, totalCredits } = studentData.Semesters[semester];
      if (totalCredits > 0) {
        let sgpa = (totalGradePoints / totalCredits).toFixed(2);
        studentData.SGPA_Details.push({ semester, SGPA: parseFloat(sgpa) });
        studentData.TotalSGPA += totalGradePoints;
        studentData.TotalCredits += totalCredits;
      }
    });

    studentData.CGPA = studentData.TotalCredits ? (studentData.TotalSGPA / studentData.TotalCredits).toFixed(2) : 0;
    res.json(studentData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student data", error });
  }
});

// ✅ Download Student Marks as PDF in **Table Format**
router.get("/download/:rollNo/:semester", async (req, res) => {
  try {
    const { rollNo, semester } = req.params;
    console.log(`📥 Download request for Roll No: ${rollNo}, Semester: ${semester}`);

    let subjects;
    if (semester.toLowerCase() === "overall") {
      subjects = await Student.find({ RollNo: rollNo }).sort({ Semester: 1 });
    } else {
      subjects = await Student.find({ RollNo: rollNo, Semester: parseInt(semester) });
    }

    if (!subjects || subjects.length === 0) {
      console.log("❌ No subjects found");
      return res.status(404).json({ message: "No subjects found" });
    }

    console.log("✅ Student and subjects found, generating PDF...");

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    res.setHeader("Content-Disposition", `attachment; filename=${semester}_MarkSheet.pdf`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Header
    doc.fontSize(20).text("Kumaraguru College of Technology", { align: "center" });
    doc.fontSize(14).text("Batch: 2023-2025", { align: "center" }).moveDown();

    // Student Info
    doc.fontSize(12).text(`Name: ${subjects[0].StudentName}`);
    doc.text(`Roll No: ${subjects[0].RollNo}`).moveDown();

    let currentSemester = null;
    subjects.forEach((subject, index) => {
      if (semester.toLowerCase() === "overall" && currentSemester !== subject.Semester) {
        doc.moveDown();
        doc.fontSize(14).text(`Semester ${subject.Semester}`, { underline: true }).moveDown();
        currentSemester = subject.Semester;
      }
    });

    // Table Header
    doc.moveDown();
    doc.fontSize(12);
    doc.text("Course Code", 50, doc.y, { width: 100, align: "left" });
    doc.text("Subject", 150, doc.y, { width: 200, align: "left" });
    doc.text("Marks", 350, doc.y, { width: 50, align: "center" });
    doc.text("Credits", 400, doc.y, { width: 50, align: "center" });
    doc.moveDown();

    doc.moveTo(50, doc.y).lineTo(500, doc.y).stroke(); // Line

    // Table Data
    subjects.forEach(subject => {
      doc.text(subject.SubjectCode, 50, doc.y, { width: 100, align: "left" });
      doc.text(subject.SubjectTitle, 150, doc.y, { width: 200, align: "left" });
      doc.text(subject.SemesterMarks.toString(), 350, doc.y, { width: 50, align: "center" });
      doc.text(subject.CreditPoints.toString(), 400, doc.y, { width: 50, align: "center" });
      doc.moveDown();
    });

    doc.end();
    console.log("✅ PDF generated successfully!");
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    res.status(500).json({ message: "Error generating PDF", error });
  }
});

export default router;*/


//with grade points
import express from "express";
import PDFDocument from "pdfkit";
import Student from "../models/Students.js";

const router = express.Router();

// ✅ Function to assign Grade based on CGPA
const getGradeFromCGPA = (cgpa) => {
  if (cgpa == 10) return "O";
  if (cgpa >= 9) return "A+";
  if (cgpa >= 8) return "A";
  if (cgpa >= 7) return "B+";
  if (cgpa >= 6) return "B";
  return "RA"; // RA means Re-Appear (for CGPA below 6)
};

// ✅ Get all students with SGPA, CGPA, and Grade
router.get("/all", async (req, res) => {
  try {
    const students = await Student.find();
    let studentDataList = [];

    students.forEach(student => {
      let studentData = {
        RollNo: student.RollNo,
        StudentName: student.StudentName,
        Semesters: {},
        SGPA_Details: [],
        TotalSGPA: 0,
        TotalCredits: 0,
        CGPA: 0,
        Grade: "", // New field
      };

      students.forEach(subject => {
        let semester = subject.Semester;
        if (!studentData.Semesters[semester]) {
          studentData.Semesters[semester] = { totalGradePoints: 0, totalCredits: 0 };
        }

        let gradePoint = (subject.SemesterMarks / 10) * subject.CreditPoints;
        studentData.Semesters[semester].totalGradePoints += gradePoint;
        studentData.Semesters[semester].totalCredits += subject.CreditPoints;
      });

      Object.keys(studentData.Semesters).forEach(semester => {
        let { totalGradePoints, totalCredits } = studentData.Semesters[semester];
        if (totalCredits > 0) {
          let sgpa = (totalGradePoints / totalCredits).toFixed(2);
          studentData.SGPA_Details.push({ semester, SGPA: parseFloat(sgpa) });
          studentData.TotalSGPA += totalGradePoints;
          studentData.TotalCredits += totalCredits;
        }
      });

      studentData.CGPA = studentData.TotalCredits ? (studentData.TotalSGPA / studentData.TotalCredits).toFixed(2) : 0;
      studentData.Grade = getGradeFromCGPA(studentData.CGPA); // Assign Grade

      studentDataList.push(studentData);
    });

    res.json(studentDataList);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student data", error });
  }
});

// ✅ Get a student by Roll No (with SGPA, CGPA, and Grade)
router.get("/:rollNo", async (req, res) => {
  try {
    const { rollNo } = req.params;
    const studentSubjects = await Student.find({ RollNo: rollNo });

    if (!studentSubjects.length) {
      return res.status(404).json({ message: "Student not found" });
    }

    let studentData = {
      RollNo: rollNo,
      StudentName: studentSubjects[0].StudentName,
      Semesters: {},
      SGPA_Details: [],
      TotalSGPA: 0,
      TotalCredits: 0,
      CGPA: 0,
      Grade: "", // New field
    };

    studentSubjects.forEach(subject => {
      let semester = subject.Semester;
      if (!studentData.Semesters[semester]) {
        studentData.Semesters[semester] = { totalGradePoints: 0, totalCredits: 0 };
      }

      let gradePoint = (subject.SemesterMarks / 10) * subject.CreditPoints;
      studentData.Semesters[semester].totalGradePoints += gradePoint;
      studentData.Semesters[semester].totalCredits += subject.CreditPoints;
    });

    Object.keys(studentData.Semesters).forEach(semester => {
      let { totalGradePoints, totalCredits } = studentData.Semesters[semester];
      if (totalCredits > 0) {
        let sgpa = (totalGradePoints / totalCredits).toFixed(2);
        studentData.SGPA_Details.push({ semester, SGPA: parseFloat(sgpa) });
        studentData.TotalSGPA += totalGradePoints;
        studentData.TotalCredits += totalCredits;
      }
    });

    studentData.CGPA = studentData.TotalCredits ? (studentData.TotalSGPA / studentData.TotalCredits).toFixed(2) : 0;
    studentData.Grade = getGradeFromCGPA(studentData.CGPA); // Assign Grade

    res.json(studentData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student data", error });
  }
});

// ✅ Download Student Marks as PDF in **Table Format**
router.get("/download/:rollNo/:semester", async (req, res) => {
  try {
    const { rollNo, semester } = req.params;
    console.log(`📥 Download request for Roll No: ${rollNo}, Semester: ${semester}`);

    let subjects;
    if (semester.toLowerCase() === "overall") {
      subjects = await Student.find({ RollNo: rollNo }).sort({ Semester: 1 });
    } else {
      subjects = await Student.find({ RollNo: rollNo, Semester: parseInt(semester) });
    }

    if (!subjects || subjects.length === 0) {
      console.log("❌ No subjects found");
      return res.status(404).json({ message: "No subjects found" });
    }

    console.log("✅ Student and subjects found, generating PDF...");

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    res.setHeader("Content-Disposition", `attachment; filename=${semester}_MarkSheet.pdf`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Header
    doc.fontSize(20).text("Kumaraguru College of Technology", { align: "center" });
    doc.fontSize(14).text("Batch: 2023-2025", { align: "center" }).moveDown();

    // Student Info
    doc.fontSize(12).text(`Name: ${subjects[0].StudentName}`);
    doc.text(`Roll No: ${subjects[0].RollNo}`).moveDown();

    let currentSemester = null;
    subjects.forEach((subject, index) => {
      if (semester.toLowerCase() === "overall" && currentSemester !== subject.Semester) {
        doc.moveDown();
        doc.fontSize(14).text(`Semester ${subject.Semester}`, { underline: true }).moveDown();
        currentSemester = subject.Semester;
      }
    });

    // Table Header
    doc.moveDown();
    doc.fontSize(12);
    doc.text("Course Code", 50, doc.y, { width: 100, align: "left" });
    doc.text("Subject", 150, doc.y, { width: 200, align: "left" });
    doc.text("Marks", 350, doc.y, { width: 50, align: "center" });
    doc.text("Credits", 400, doc.y, { width: 50, align: "center" });
    doc.moveDown();

    doc.moveTo(50, doc.y).lineTo(500, doc.y).stroke(); // Line

    // Table Data
    subjects.forEach(subject => {
      doc.text(subject.SubjectCode, 50, doc.y, { width: 100, align: "left" });
      doc.text(subject.SubjectTitle, 150, doc.y, { width: 200, align: "left" });
      doc.text(subject.SemesterMarks.toString(), 350, doc.y, { width: 50, align: "center" });
      doc.text(subject.CreditPoints.toString(), 400, doc.y, { width: 50, align: "center" });
      doc.moveDown();
    });

    doc.end();
    console.log("✅ PDF generated successfully!");
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    res.status(500).json({ message: "Error generating PDF", error });
  }
});

export default router;




