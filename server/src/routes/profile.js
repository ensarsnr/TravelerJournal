const express = require("express");
const profile = require("../controllers/profile");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/profile", authMiddleware ,profile);

module.exports = router;

