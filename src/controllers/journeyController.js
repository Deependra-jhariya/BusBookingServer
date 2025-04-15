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

const getJourney = async (req, res) => {
  try {
    const getJourney = await Journey.find();
    if (!getJourney) {
      res.status(402).json({
        message: "Journey not found.",
        success: false,
      });
    }

    res.status(200).json({
      message: "journey fetched successfully.",
      success: true,
      journeys: getJourney,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};

const getJourneyById = async (req, res) => {
  try {
    const journeyId = req?.params?.id;
    const journey = await Journey.findById(journeyId);

    if (!journey) {
      res.status(402).json({
        message: "Journey not found.",
        success: false,
      });
    }
    res.status(200).json({
      message: "Journey fetched successfully.",
      success: true,
      journey: journey,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};

const updateJourney = async (req, res) => {
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

    const journeyId = req?.params?.id;

    const updateJourneyData = {
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
    };
    const updateJourney = await Journey.findByIdAndUpdate(
      journeyId,
      updateJourneyData,
      { new: true }
    );
    if (!updateJourney) {
      res.status(402).json({
        message: "Journey not updated",
        success: false,
      });
    }
    res.status(200).json({
      message: "Journey updated successfully.",
      success: true,
      updateJourney: updateJourney,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};

const deletedJourney = async (req, res) => {
  try {
    const journeyId = req?.params?.id;
    const deleteJourney = await Journey.findByIdAndDelete(journeyId);

    if(!deleteJourney){
      res.status(402).json({
        message: "Journey not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Journey deleted successfully.",
      success: true,
      deleteJourney:deleteJourney
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};
module.exports = { addJourney, getJourney, getJourneyById, updateJourney,deletedJourney };
