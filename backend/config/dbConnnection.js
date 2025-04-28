const mongoose = require('mongoose');
const dbConnect = async()=>{
    try{
  const connection = await mongoose.connect(process.env.CONNECTION_STRING);
   console.log("Database connectedd",connection.connection.name)
}
  catch(error){
     console.log(error.message);
     
  }
}

module.exports = dbConnect;