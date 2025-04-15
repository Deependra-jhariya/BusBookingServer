const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
  } catch (error) {
    console.log("Database not connected.");
  }
};

module.exports = connectDb;
