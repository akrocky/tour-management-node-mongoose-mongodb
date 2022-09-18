const mongoose = require("mongoose");
const dbConnect= async()=>{
    
    try {
        await mongoose.connect('mongodb://localhost:27017/tour_management');
        console.log('mongodb connected sucessfully'.blue)
      } catch (error) {
        console.log(error);
      }
}
module.exports=dbConnect;