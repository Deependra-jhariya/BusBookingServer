const { signUp, login } = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
