// your code goes here


// donot chnage the below code
// your code goes here
const express=require("express")
const app=express()

app.use(express.json())

app.get("/sum",(req,res)=>{
    const {a,b}=req.query
    if(a==undefined && b==undefined){
        return res.status(400).send({ "error": "Both \"a\" and \"b\" are required parameters" })
    }else if(isNaN(Number(a)) && isNaN(Number(b))){
        return res.status(400).send({ "error": "Both \"a\" and \"b\" must be numbers" })
            }
    else if(isNaN(Number(a))){
return res.status(400).send({ "error": "\"a\" is not a valid number" })
    }else if(isNaN(Number(b))){
        return res.status(400).send({ "error": "\"b\" is not a valid number" })
            }else{
                        let sum=Number(a)+Number(b)
                        return res.send({ "sum": sum })
                    }
})

app.listen(8080,()=>{
    console.log("serveris running")
    
})

module.exports = app;
