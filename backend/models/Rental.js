const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Rental', RentalSchema);
