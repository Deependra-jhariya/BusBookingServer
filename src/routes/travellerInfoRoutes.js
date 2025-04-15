const express = require("express");

const {addTravellerInformation, getTravellerInformation} = require("../controllers/travellerInfoController");

const router = express.Router();

router.post("/addTravellerInfo", addTravellerInformation);
router.get("/", getTravellerInformation);

module.exports = router;
