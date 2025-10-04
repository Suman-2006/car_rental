const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/customerController');

router.get('/', ctrl.getCustomers);
router.post('/', ctrl.createCustomer);

module.exports = router;
