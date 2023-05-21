//  import required modules from nodejs and build the server

// export the server
const express=require("express");


const app=express();
app.use(express.json());
const validator=require("./middlewares/validator")
app.get("/",(req,res)=>{
    res.send("homepage....")
})

app.post("/",validator,(req,res)=>{
    res.send("data received")
})
app.listen(8080,()=>{

    console.log("running")
})

module.exports =app;
