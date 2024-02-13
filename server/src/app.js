const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv");

// routes
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const postRoutes = require("./routes/post");
const followingRoutes = require("./routes/following");

dotenv.config();

const port = 3000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Endpointler
app.use("/auth", authRoutes);
app.use("/get", profileRoutes);
app.use("/post", postRoutes);
app.use("/profile", followingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
