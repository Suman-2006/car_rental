const Rental = require('../models/Rental');
const Car = require('../models/Car');

exports.createRental = async (req, res) => {
  try {
    const { startDate, endDate, customer, car } = req.body;

    // check car availability (basic: car.available flag)
    const carDoc = await Car.findById(car);
    if (!carDoc || !carDoc.available) {
      return res.status(400).json({ error: 'Car not available' });
    }

    // create rental
    const rental = await Rental.create({ startDate, endDate, customer, car });

    // mark car as unavailable
    carDoc.available = false;
    await carDoc.save();

    res.status(201).json(rental);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find().populate('customer').populate('car');
    res.json(rentals);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// optionally add endpoint to end rental and make car available
exports.endRental = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) return res.status(404).json({ error: 'Rental not found' });

    // mark car available
    const car = await Car.findById(rental.car);
    car.available = true;
    await car.save();

    await Rental.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
