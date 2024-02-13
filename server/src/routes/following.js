const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const follow = require("../controllers/following");

const router = express.Router();


router.post("/following", authMiddleware, follow);

module.exports = router;