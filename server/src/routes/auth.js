const express = require("express");
const register = require("../controllers/auth/register");
const login = require("../controllers/auth/login");
// const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
