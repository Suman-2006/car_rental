require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('../models/Car');
const Customer = require('../models/Customer');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Car.deleteMany({});
  await Customer.deleteMany({});

  await Car.create([
    { model: 'Toyota Innova', rentPrice: 2500, available: true },
    { model: 'Honda City', rentPrice: 1800, available: true },
    { model: 'Mahindra Scorpio', rentPrice: 3000, available: true }
  ]);

  await Customer.create([
    { name: 'Test User', phone: '9876543210' }
  ]);

  console.log('Seeded DB');
  process.exit(0);
}
seed();
