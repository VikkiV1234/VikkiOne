//CGpa
/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/StudentRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/mern-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));*/








//Admission
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import admissionRoutes from "./routes/AdmissionRoutes.js"; // Import routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/admissions", admissionRoutes); // Base URL for admissions API

// Start the server
const PORT = 5001;
mongoose
  .connect("mongodb://127.0.0.1:27017/Student_admission", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));


  //Placement details
  /*import express from "express";
  import mongoose from "mongoose";
  import cors from "cors";
  import placementRoutes from "./routes/placementRoutes.js";
  
  const app = express();
  
  // Middleware
  app.use(express.json());
  app.use(cors());
  
  // MongoDB Connection
  const MONGO_URI = "mongodb://127.0.0.1:27017/Placement"; // Ensure 'Placement' is your database name
  
  mongoose
      .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("✅ MongoDB Connected Successfully"))
      .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));
  
  // API Routes
  app.use("/api/placements", placementRoutes);
  
  // Start Server
  const PORT = 5001;
  app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
  });*/
  

  
  

 // placementfilter
 /*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import studentRoutes from "./routes/studentPlacementRoutes.js"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;
const MONGO_URI = "mongodb://localhost:27017/Placement"; // ✅ Correct DB name

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

app.use("/api/students", studentRoutes); // ✅ Correct API Route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

//all
/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import models and routes (Ensure correct file names)
import admissionRoutes from "./routes/AdmissionRoutes.js";
import placementRoutes from "./routes/placementRoutes.js";
import studentPlacementRoutes from "./routes/studentPlacementRoutes.js";
import studentRoutes from "./routes/StudentRoutes.js";

// Import the correct model
import Students from "./models/Students.js"; // ✅ Correct import

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection Strings
const MONGO_URI_ADMISSION = process.env.MONGO_URI_ADMISSION || "mongodb://localhost:27017/Student_admission";
const MONGO_URI_PLACEMENT = process.env.MONGO_URI_PLACEMENT || "mongodb://localhost:27017/Placement";
const MONGO_URI_STUDENT = process.env.MONGO_URI_STUDENT || "mongodb://localhost:27017/mern-auth";

// Connect to all databases
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI_STUDENT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Student DB");

    await mongoose.createConnection(MONGO_URI_ADMISSION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Student Admission DB");

    await mongoose.createConnection(MONGO_URI_PLACEMENT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Placement DB");

    // Start the server after DB connections
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit if DB connection fails
  }
};

// Routes
app.use("/api/admissions", admissionRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/student-placements", studentPlacementRoutes);
app.use("/api/students", studentRoutes);

connectDB(); // Call function to connect to DBs*/
    
//new login

/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5002; // ✅ Use 5002 for the second server

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Second Server is Running on Port " + PORT);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});*/


//login
/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // Ensure the extension is included

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));*/
