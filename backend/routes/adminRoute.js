const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/adminMiddleware')
const auth =  require('../middleware/auth')
router.get('/welcome', auth, isAdmin, (req,res)=>{
    res.status(200).json({
        message:"Welcome to the user page"
    });
})
module.exports= router;