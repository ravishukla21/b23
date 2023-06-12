const mongoose=require("mongoose");
require("dotenv").config();

//mongodb+srv://ravi:shukla@cluster0.swhyrxz.mongodb.net/InstaMasai?retryWrites=true&w=majority
const connection=mongoose.connect(process.env.MongoURL)

module.exports={
    connection
}