const express = require('express');
const router = express.Router();

const {requestOtp}= require('../controllers/authController.js')
const {verifyOtp}= require('../controllers/authController.js')



// Route to request OTP
router.post('/login', requestOtp);

// Route to verify OTP
router.post('/verify', verifyOtp);

module.exports = router;
