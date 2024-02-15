const express = require("express");
const image = require("../controllers/images");
const getImage = require("../controllers/getImages");
const deleteImage = require("../controllers/deleteImages");
const savedImage = require("../controllers/savedImage");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/image", authMiddleware, image);
router.post("/delete", authMiddleware, deleteImage);
router.get("/get-image", getImage);
router.post("/saved", authMiddleware, savedImage);
module.exports = router;