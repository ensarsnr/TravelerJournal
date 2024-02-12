const express = require("express");
const image = require("../controllers/images");
const getImage = require("../controllers/getImages");
const deleteImage = require("../controllers/deleteImages");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/image", authMiddleware, image);
router.post("/delete", authMiddleware, deleteImage);
router.get("/get-image", getImage);

module.exports = router;