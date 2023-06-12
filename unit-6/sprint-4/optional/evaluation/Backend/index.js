const express=require("express");
const cors=require("cors");

const app=express();
app.use(express.json())
app.use(cors());

//hihello
const {connection}=require("./db")
require("dotenv").config();

const {userRouter}=require("./routes/user.route");
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("homepage")
})

const {postRouter}=require("./routes/post.route");
app.use("/posts",postRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log("connected to db");
        console.log("server is running at port 4500")
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }
})