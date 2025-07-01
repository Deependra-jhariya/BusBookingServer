const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const getKeys = (req, res) => {
  res.status(200).json({
    message: "publishable key found.",
    status: 200,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

const createPaymentIntent = async (req, res) => {
  try {
    const customer = await stripe.customers.create();

    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2025-03-31.basil'}
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'eur',
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter
      // is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    });

  } catch (err) {
    console.log("Error in create payment intent", err);
  }
};

module.exports = { getKeys,createPaymentIntent };
