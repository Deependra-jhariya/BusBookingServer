const express = require("express");

const { addBuses, getAllBuses, updateBuses, getBusesById, deleteBus } = require("../controllers/busControllers");

const router = express.Router();

router.post("/addBuses", addBuses);
router.get("/getBuses", getAllBuses);
router.get("/:id", getBusesById);
router.put("/updateBuses/:id", updateBuses);
router.delete("/deleteBuses/:id", deleteBus);

module.exports = router;
