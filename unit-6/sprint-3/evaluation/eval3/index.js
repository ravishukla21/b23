const express=require("express");
const app=express();
const {auth}=require("./middlewares/auth.middleware")
app.use(express.json());
const {connection}=require("./db");
const {userrouter}=require("./Users.route");

app.use("/users",userrouter)

const {BooksRouter}=require("./Books.route")
app.use("/books",BooksRouter)



require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("homepage")
    
})


app.listen(process.env.port,async()=>{

    try{

        await connection
        console.log("connected to the port")
        console.log(`server running at port ${process.env.port}`)

    }
    catch(err){
        console.log(err.message)
    }
    
})