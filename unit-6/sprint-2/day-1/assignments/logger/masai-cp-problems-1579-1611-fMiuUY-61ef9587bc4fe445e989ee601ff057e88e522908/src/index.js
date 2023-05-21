// import required modules

// export the server
// eg.module.exports = app;
const express=require("express");
const app=express();
app.use(express.json());
const fs=require("fs");

var morgan = require('morgan')
var path = require('path')
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan(':method :status :res[content-length] :response-time ms :date[web] :http-version :url', { stream: accessLogStream }))


app.get("/",(req,res)=>{
    res.send({ "message": "welcome to server" });

})

app.get("/get-users",(req,res)=>{

    res.send({
        "message": "here is the list of all users"
        });
})

app.post("/add-user",(req,res)=>{
    res.status(201).send({
        "message": "user added successfully"
        });
})

app.put("/user/:id",(req,res)=>{
    const {id}=req.params;

    res.status(201).send({
        "message": `user ${id} updated successfylly`
    })
})


app.delete("/user/:id",(req,res)=>{
    const {id}=req.params;
    
    res.status(200).send({
        "message": `user ${id} updated successfylly`
    })
})
app.listen(8080,()=>
{console.log("running")})



module.exports = app;