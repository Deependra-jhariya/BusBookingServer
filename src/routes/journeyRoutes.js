const express = require("express");
const { addJourney } = require("../controllers/journeyController");

const router = express.Router();

router.post("/addJourney", addJourney);


module.exports =  router