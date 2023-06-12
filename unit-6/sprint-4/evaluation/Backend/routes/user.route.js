const {UserModel}=require("../models/user.model");
const {Router}=require("express");




const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const userRouter=Router();

userRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password,age,city,is_married}=req.body;

    try{
        const findUser=await UserModel.findOne({email})
        if(findUser){
            res.status(200).json({msg:"User already exist, please login"})
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                const user=UserModel({name,email,gender,password:hash,age,city,is_married})
                await user.save()
                res.status(200).json({msg:"user registered succesfully"})
            })
        }

    }catch(err){
        res.status(200).json({error:err.message})
    }
})





module.exports={
    userRouter
}