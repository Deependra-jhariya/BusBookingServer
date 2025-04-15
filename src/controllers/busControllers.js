const Bus = require("../models/busModel");

const addBuses = async (req, res) => {
  try {
    const {
      fromLocation,
      toLocation,
      number,
      Date,
      travelesName,
      coach,
      startTime,
      endTime,
      totalHours,
      ticketPrice,
      leftSeat,
    } = req.body;

    //  check if bus exits
    const busExists = await Bus.findOne({ number });

    if (busExists) {
      return res.status(402).json({
        message: "Bus already exists",
        success: false,
        busExists,
      });
    }

    const newBus = new Bus({
      fromLocation,
      toLocation,
      number,
      Date,
      travelesName,
      coach,
      startTime,
      endTime,
      totalHours,
      ticketPrice,
      leftSeat,
    });

    await newBus.save();
    res.status(200).json({
      message: "Bus sucessfully added",
      buses: newBus,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
  }
};

const updateBuses = async (req, res) => {
  try {
    const {
      fromLocation,
      toLocation,
      number,
      Date,
      travelesName,
      coach,
      startTime,
      endTime,
      totalHours,
      ticketPrice,
      leftSeat,
    } = req.body;

    const busDetails = {
      fromLocation,
      toLocation,
      number,
      Date,
      travelesName,
      coach,
      startTime,
      endTime,
      totalHours,
      ticketPrice,
      leftSeat,
    };

    const busNumber = req?.params?.id;

    const newBuses = await Bus.findByIdAndUpdate(busNumber, busDetails, {
      new: true,
    });

    if (!newBuses) {
      return res.status(402).json({
        message: "Bus not found.",
        success: false,
      });
    }

    res.status(200).json({
      message: "Bus updated successfully.",
      success: false,
      buses: newBuses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json({
      message: "All buses fetched successfully.",
      success: false,
      buses: buses,
    });
  } catch (error) {
    res.status(500).josn({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

const getBusesById = async (req, res) => {
  try {
    const busId = req?.params?.id;

    const getBus = await Bus.findById(busId);
    if (!getBus) {
      res.status(402).json({
        message: "Bus not found.",
        success: false,
      });
    }
    res.status(200).json({
      message: "Bus fetched successfully.",
      success: true,
      bus: getBus,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error,
    });
  }
};

const deleteBus = async (req, res) => {
  try {
    const busId = req?.params?.id;

    const deletedBus = await Bus.findByIdAndDelete(busId);
    if (!deletedBus) {
      res.status(402).json({
        message: "Bus not found.",
        success: false,
      });
    }
    res.status(200).json({
        message:"Bus deletd successfully.",
        success:true,
        bus:deletedBus,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error,
    });
  }
};

module.exports = { addBuses, updateBuses, getAllBuses, getBusesById,deleteBus };
