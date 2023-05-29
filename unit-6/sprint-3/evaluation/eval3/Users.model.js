const mongoose=require("mongoose");

const UsersSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    city:String,
    age:Number
})

const UsersModel=mongoose.model("user",UsersSchema)

module.exports={
    UsersModel
}