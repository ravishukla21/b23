// your code goes here
const express=require("express");
const app=express();
app.use(express.json())

const fs=require("fs");

app.get("/multiply",(req,res)=>{
    let {a,b}=req.query;
    if(a==undefined && b==undefined){
        return  res.status(400).send({ "error": "Both \"a\" and \"b\" are required parameters" })
    }else if(isNaN(Number(a))){
        res.status(400).send({ "error": "\"a\" is not a valid number" })
    }else if(isNaN(Number(b))){
        res.status(400).send({ "error": "\"b\" is not a valid number" })
    }else{
        let c=Number(a)*Number(b)
        return  res.status(200).send({"product": c})
    }
    

})

app.listen(8080,()=>{
    console.log("running")
})
module.exports = app;
