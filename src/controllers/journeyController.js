const Journey = require("../models/journeyModel");

const addJourney = async (req, res) => {
  try {
    const {
      fromLocation,
      toLocation,
      boardingPoint,
      dropPoint,
      busNumber,
      startDate,
      reachDate,
      startTime,
      reachTime,
      travelesName,
      coach,
      totalHours,
      ticketPrice,
      bookedSeatNumer,
    } = req.body;

    const generatePNR = async () => {
      // Generate a random 6-digit number
      const pnr = Math.floor(100000 + Math.random() * 900000);

      // Check if it already exists
      const exists = await Journey.findOne({ PNR_TicketNo: pnr });
      if (exists) {
        return generatePNR(); // Recursive retry if exists
      }
      return pnr;
    };
    const PNR_TicketNo = await generatePNR();
    console.log("PNR_TicketNo", PNR_TicketNo);


    const journeyDetails = new Journey({
      PNR_TicketNo,
      fromLocation,
      toLocation,
      boardingPoint,
      dropPoint,
      busNumber,
      startDate,
      reachDate,
      startTime,
      reachTime,
      travelesName,
      coach,
      totalHours,
      ticketPrice,
      bookedSeatNumer,
    });

    await journeyDetails.save();
    res.status(200).json({
      message: "Journey added successfully.",
      success: true,
      journeyDetails: journeyDetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};

module.exports = { addJourney };
