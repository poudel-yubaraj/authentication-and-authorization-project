const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const dbConnect = require('./config/dbConnnection')
dbConnect();
app.use(express.json()); // Parse JSON
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to parse JSON body
app.use('/user',require('./routes/userRoute'));
app.use('/products',require('./routes/productRoute'))

app.listen(port,()=>{
  console.log(`server is listening on the port ${port}`)
});