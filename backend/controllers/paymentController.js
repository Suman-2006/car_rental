const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate({
      path: 'rental',
      populate: [{ path: 'car' }, { path: 'customer' }]
    });
    res.json(payments);
  } catch (err) { res.status(500).json({ error: err.message }); }
};
