const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://ravi:shukla@cluster0.swhyrxz.mongodb.net/InstaMasai?retryWrites=true&w=majority")

module.exports={
    connection
}