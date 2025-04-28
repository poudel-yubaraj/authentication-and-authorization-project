const express = require('express');
const router = express.Router();
const {signupValidation, loginValidation} =  require('../middleware/authValidation')
const{ logIn, signUp}= require('../controller/authController')
router.post('/signup', signupValidation, signUp);
router.post('/login', loginValidation, logIn);
module.exports = router;
