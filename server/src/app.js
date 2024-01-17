const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv");

// routes
const authRoutes = require("./routes/auth");
const getUserRoutes = require("./routes/getUser");

dotenv.config();

const port = 3000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Endpointler
app.use("/auth", authRoutes);
app.use("/get", getUserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
