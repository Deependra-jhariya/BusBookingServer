const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ user }, process?.env?.JWTSECRET_KEY);
};

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  let userData = await User.findOne({ email });
  if (userData) {
    res.status(404).json({
      success: false,
      messaage: "user already register.",
    });
  }
  userData = await User.create({ name, email, password });
  const token = generateToken(userData);
  res.status(200).json({
    userData,
    messaage: "User successfully created.",
    success: true,
    token,
  });
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "internal server error.",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user || !password) {
    res.status(404).json({
      success: false,
      messaage: "invalid credentials",
    });
  }
  const token = generateToken(user);
  res.status(200).json({
    user,
    messaage: "User login successfully.",
    success: true,
    token,
  });
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "internal server error.",
    });
  }
};

const profile = async (req, res) => {
  try {
    const userId = req?.params?.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User fetch successfully.",
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error,
    });
  }
};

const updateProfile = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userId = req?.params?.id;
    const updateUser = {
      name,
      email,
      password,
    };
    const user = await User.findByIdAndUpdate(userId, updateUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User updated successfully.",
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error,
    });
  }
};

module.exports = { signUp, login, profile,updateProfile };
