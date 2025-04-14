const { signUp, login, profile, updateProfile } = require("../controllers/userControllers");
const express = require("express");
const protect =  require("../Middleware/authMiddleware")
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/profile/:id",protect, profile);
router.put("/profile/update/:id",protect, updateProfile);
router.put("/profile/update/:id",protect, updateProfile);

module.exports = router;
