const {UserModel}=require("../model/user.model")
const {Router}=require("express")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRouter=Router()
userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age}=req.body
    try{
        bcrypt.hash(pass, 5,async(err, hash) =>{
            // Store hash in your password DB.
            const user=UserModel({name,email,age,pass:hash})
            await user.save()
            res.status(200).json({"msg":"Data added successfully"})
        });


    }catch(er){
res.status(400).json({"msg":er})
    }
})


// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// })


userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try{
const user=await UserModel.findOne({email})
if(user){
    bcrypt.compare(pass, user.pass, (err, result) =>{
        // result == true
if(result){
    const token= jwt.sign({ author:user.name,autherId:user._id }, 'masai');
    res.status(200).json({"msg":"Login Successfiully","token":token})
}else{
    res.status(200).json({"msg":"Wrong Credential"})
}
    })

}else{
    res.status(200).json({"msg":"Wrong Credential"})
}
    }catch(er){
        res.status(400).json({"err":er.message})
    }
})

module.exports={
    userRouter
}