const mongoose = require("mongoose");

const travelerInfoSchema = new mongoose.Schema({
  passengerName: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  male: {
    type: String,
    require: true,
  },
  female: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

const travellerInfo = mongoose.model("travellerInfo", travelerInfoSchema);

module.exports = travellerInfo;
