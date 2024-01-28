const express = require("express");
const image = require("../controllers/images");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/image", authMiddleware, image);

module.exports = router;