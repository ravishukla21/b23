const express=require("express");
const {UsersModel}=require("./Users.model");
const bcrypt=require("bcrypt");
const userrouter=express.Router();
var passwordvalidator=require("password-validator");


userrouter.post("/register",async(req,res)=>{
    let  {name,email,pass,city,age}=req.body;
    console.log(pass,"password")
     var schema = new passwordvalidator

     schema
     .is().min(8)
     .has().uppercase()
     .has().digits(1)
     .has().symbols()

     console.log(schema.validate(pass,{list:true}))
   
    //  const email456= db.users.find()
     
     if(schema.validate(pass)){
        try{

            bcrypt.hash(pass,5,async(err,hash)=>{
                if(err){
                    res.status(400).json({error:err.message})
                }else{
                    const user=new UsersModel({name,email,pass:hash,city,age})
                    await user.save()
                }
            })
            res.status(200).json({msg:"new user",updateduser:req.body})
        }
        catch(err){
            res.status(400).json({error:err.message})
        }

     }else{
        res.status(400).json(`password must have ${schema.validate(pass,{list:true})}`)
     }




})

//login

userrouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    try{
        const user=await UsersModel.findOne({email})
        if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                if(result){
                    res.status(200).json({msg:"Login Successful"})
                }else{
                
                res.status(200).json({msg:"wrng credentials"})
                }

            });
        }else{
            res.status(200).json({msg:"user invalid"})
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
    
})



module.exports={
    userrouter
}
