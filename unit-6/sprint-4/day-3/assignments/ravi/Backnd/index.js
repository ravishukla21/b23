const express=require("express")
const {connection}=require("./db")
const app=express()
const {userRouter}=require("./router/user.route")
const jwt = require('jsonwebtoken');
const {auth}=require("./middleware/auth.middleware")
const {noterouter}=require("./router/notes.collection")
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.use("/user",userRouter)

app.get("/home",(req,res)=>{
    res.send({"msg":"HOME PAGE"})
})


app.use(auth)
app.get("/movies",(req,res)=>{
    // const token=req.headers.authorization
    // jwt.verify(token, 'masai', (err, decoded)=>{
    //     if(decoded){
    //         res.status(200).send({"msg":"Movie Data"})
    //     }else{
    //         res.status(400).send({"msg":err.message})
    //     }
    res.status(200).send({"msg":"Movie    gh Data"})
    // }
        
    // )
})
app.use("/notes",noterouter)





app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }catch(er){
        console.log(er)
    }
    console.log("server Running at 8080")
})