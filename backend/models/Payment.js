const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);
