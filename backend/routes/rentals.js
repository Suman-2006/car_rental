const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/rentalController');

router.get('/', ctrl.getRentals);
router.post('/', ctrl.createRental);
router.delete('/:id/end', ctrl.endRental);

module.exports = router;
