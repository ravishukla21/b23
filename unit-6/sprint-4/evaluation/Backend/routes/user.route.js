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

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user1=await UserModel.findOne({email})
        if(user1){
            bcrypt.compare(password,user1.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userid:user1._id,name:user1.name},"ravi");
                    res.status(200).json({msg:"logged in",token})
                }else{
                    res.status(200).json({error:"wrong credentials"})
                }
            })
        }else{
            res.status(200).json({msg:"user does not exist"})

        }
    }catch(err){
        res.status(200).json({error:err.message})
        

    }
})





module.exports={
    userRouter
}