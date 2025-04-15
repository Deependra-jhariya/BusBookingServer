const TravellerInfo = require("../models/travelerInfomodel");

const addTravellerInformation = async (req, res) => {
  try {
    const { passengerName, age, male, female, mobile, email } = req.body;

    const travellerInfoExists = await TravellerInfo.findOne({ email });
    if (travellerInfoExists) {
      res.status(402).json({
        message: "Traveller info already exists.",
        success: false,
      });
    }

    const travellerInfo = await new TravellerInfo({
      passengerName,
      age,
      male,
      female,
      mobile,
      email,
    });
    await travellerInfo.save();
    res.status(200).json({
      message: "Traveller information added successfully.",
      success: true,
      travellerInfo: travellerInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};

const getTravellerInformation =async (req, res) => {
  try {
    const getTravellerInfo = await TravellerInfo.find()
    if(!getTravellerInfo){
      res.status(404).json({
        message: "Traveller not found.",  
        success: false,
      });
    }
    res.status(200).json({
      message: "Traveller information fetched successfully.",  
      success: true,
      TravellerInformation:getTravellerInfo
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",  
      success: false,
      error: error,
    });
  }
};

module.exports = { addTravellerInformation,getTravellerInformation };
