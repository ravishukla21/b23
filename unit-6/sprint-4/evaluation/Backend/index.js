const express=require("express");
const app=express();
app.use(express.json())
const {connection}=require("./db")

const {userRouter}=require("./routes/user.route");
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("homepage")
})




app.listen(4500,async()=>{
    try{
        await connection;
        console.log("connected to db");
        console.log("server is running at port 4500")
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }
})