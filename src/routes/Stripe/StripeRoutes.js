const express =  require("express")
const { getKeys,createPaymentIntent } = require("../../controllers/Stripe/stripe.controller");
const protect = require("../../Middleware/authMiddleware");

const router = express.Router()

router.get("/key",getKeys);
router.post("/payment-intent",protect, createPaymentIntent);



module.exports = router