const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
router.get('/',auth,(req, res)=>{
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ]);
});

module.exports=router;