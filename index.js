const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./src/config/DatabaseConnection/DatabaseConnection");
const authRoutes = require("./src/routes/userRoutes");

dotenv.config();
const PORT = process?.env?.PORT;
connectDb();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
