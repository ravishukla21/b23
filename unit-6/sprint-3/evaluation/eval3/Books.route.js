const express=require("express");
const {BooksModel}=require("./Books.model");
const {auth}=require("./middlewares/auth.middleware")
const BooksRouter=express.Router()
//  title:String,
// genre:String,
// author:String,
// publishing_year:Number,
BooksRouter.use(auth)
BooksRouter.post("/add",async(req,res)=>{
    let  {title,genre,author,publishing_year}=req.body;
    
     
    try{
        const books=new BooksModel(req.body)
        await books.save()
        res.status(200).json({"msg":"Book added", "addedBook": books })
    }
    catch(err){
        res.status(400).json({"error":err.message})
    }




})


BooksRouter.get("/",async(req,res)=>{
    try{
        const users=await BooksModel.find()
        console.log(users)
    
        res.status(200).json(users)

    }catch(err){
        res.status(400).json({error:err.message})
    }
  
})
BooksRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try{

        await BooksModel.findByIdAndUpdate({_id:id},payload)
        const updateduser=await BooksModel.find({_id:id})
        res.status(200).json({"msg":"Book has been updated"})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})
BooksRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteuser=await BooksModel.find({id:id})
        await BooksModel.findByIdAndDelete({id:id})
        res.status(200).json({msg:"Book has been deleted"})
    }catch(err){
        res.status(400).json({error:err.message})
    }


})



module.exports={
    BooksRouter
}