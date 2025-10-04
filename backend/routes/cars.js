// const express = require('express');
// const router = express.Router();
// const c = require('../controllers/carController');
// const auth = require('../middleware/auth'); // optional

// router.get('/', auth, c.getAllCars);      // get all cars
// router.get('/:id', auth, c.getCarById);   // get car by ID
// router.post('/', auth, c.createCar);      // create car
// router.put('/:id', auth, c.updateCar);    // update car

// module.exports = router;


const express = require('express');
const router = express.Router();
const c = require('../controllers/carController');
// Optional auth middleware
const auth = require('../middleware/auth'); 

router.get('/', c.getAllCars);      // public: all cars
router.get('/:id', c.getCarById);   // public: single car

router.get('/:id', auth, c.getCarById); // get car by ID

router.put('/:id', auth, c.updateCar);

module.exports = router;
