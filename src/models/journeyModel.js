const mongoose = require("mongoose");

const journeySchema = new mongoose.Schema(
  {
    PNR_TicketNo: {
      type: Number,
      unique:true
    },
    fromLocation: {
      type: String,
      require: true,
    },
    toLocation: {
      type: String,
      require: true,
    },
    boardingPoint: {
      type: String,
      require: true,
    },
    dropPoint: {
      type: String,
      require: true,
    },
    busNumber: {
      type: String,
      require: true,
    },
    startDate: {
      type: String,
      require: true,
    },
    reachDate: {
      type: String,
      require: true,
    },
    startTime: {
      type: String,
      require: true,
    },
    reachTime: {
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
    totalHours: {
      type: String,
      require: true,
    },
    ticketPrice: {
      type: Number,
      require: true,
    },
    bookedSeatNumer: {
      type: [String],
      require: true,
    },
  },
  { timestamps: true }
);

const Journey = mongoose.model("journey", journeySchema);

module.exports = Journey;
