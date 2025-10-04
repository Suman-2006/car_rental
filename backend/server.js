require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routers
const carsRouter = require('./routes/cars');
const customersRouter = require('./routes/customers');
const rentalsRouter = require('./routes/rentals');
const paymentsRouter = require('./routes/payments');
const authRouter = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);          // Sign In / Sign Up
app.use('/api/cars', carsRouter);          // Car operations
app.use('/api/customers', customersRouter);// Customer CRUD
app.use('/api/rentals', rentalsRouter);    // Rental bookings
app.use('/api/payments', paymentsRouter);  // Payment transactions


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Car Rental System API');
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
