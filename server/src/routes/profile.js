const express = require("express");
const profile = require("../controllers/profile");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/user", authMiddleware ,profile);

module.exports = router;

