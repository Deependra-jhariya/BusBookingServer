const express = require("express");
const {
  addJourney,
  getJourney,
  getJourneyById,
  updateJourney,
  deletedJourney,
} = require("../controllers/journeyController");

const router = express.Router();

router.post("/addJourney", addJourney);
router.get("/", getJourney);
router.get("/:id", getJourneyById);
router.put("/updateJourney/:id", updateJourney);
router.delete("/deleteJourney/:id", deletedJourney);

module.exports = router;
