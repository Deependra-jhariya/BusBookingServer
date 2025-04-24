const mongoose = require("mongoose");

const tikcetsSchema = new mongoose.Schema(
  {
    passengerName: {
      type: String,
      require: true,
    },
    fromLocation: {
      type: String,
      require: true,
    },
    toLocation: {
      type: String,
      require: true,
    },
    dateOfJourney: {
      type: String,
      require: true,
    },
    hours: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
  },
  { timestamps: false }
);

const Ticket = mongoose.model("Ticket", tikcetsSchema);
module.exports = Ticket;
