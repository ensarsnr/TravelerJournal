const express = require("express");
const image = require("../controllers/images");
const getImage = require("../controllers/getImages");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/image", authMiddleware, image);
router.get("/get-image", getImage);

module.exports = router;