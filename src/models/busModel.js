const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    fromLocation: {
      type: String,
      require: true,
    },
    toLocation: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
    Date: {
      type: String,
      require: true,
    },
    travelesName: {
      type: String,
      require: true,
    },
    coach: {
      type: String,
      require: true,
    },
    startTime: {
      type: String,
      require: true,
    },
    endTime: {
      type: String,
      require: true,
    },
    totalHours: {
      type: String,
      require: true,
    },
    ticketPrice: {
      type: Number,
      require: true,
    },
    leftSeat: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const bus = mongoose.model("bus", busSchema);

module.exports = bus;
