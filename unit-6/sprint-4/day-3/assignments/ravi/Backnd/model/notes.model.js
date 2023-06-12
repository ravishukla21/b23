const mongoose=require("mongoose")

const NotesSchema=mongoose.Schema({
   title:String,
   body:String,
   author:String,
   category:String,
   autherId:String
})


const NotesModel=mongoose.model("notes",NotesSchema)

module.exports={
    NotesModel
}