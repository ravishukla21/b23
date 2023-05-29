const mongoose=require("mongoose");

const UsersSchema=mongoose.Schema({
    title:String,
    genre:String,
    author:String,
    publishing_year:Number
    
})

const BooksModel=mongoose.model("book",UsersSchema)

module.exports={
    BooksModel
}