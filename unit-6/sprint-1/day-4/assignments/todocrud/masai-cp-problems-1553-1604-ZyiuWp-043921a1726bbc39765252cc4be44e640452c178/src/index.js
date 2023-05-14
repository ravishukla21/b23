//  import required modules from nodejs and build the server
const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.json())

app.get("/",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8")
   
     let data1=JSON.parse(data)
    res.status(200).json(data1.todos) 
    
})

app.post("/",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8")
    console.log(data)
    let data1=JSON.parse(data)
    console.log(data1,"data1")
    data1.todos.push(req.body)
    console.log(req.body,"req.body")


    fs.writeFileSync("./db.json",JSON.stringify(data1))
    res.status(200).json(data1.todos)

})

////

app.put("/:id",(req,res)=>{
    let {id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let s1=false
    for(let i=0;i<data.todos.length;i++){
    if(data.todos[i].id==id){
        data.todos[i]=req.body
        s1=true
    }
    
    }

    if(s1=false){
        res.status(400).send("Invalid argument")
    }else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.status(200).json(data.todos)
        
    }



})


app.delete(":/id",(req,res)=>{

    let {id}=req.params
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let s1=false
    for(let i=0;i<data.todos.length;i++){
    if(data.todos[i].id==id){
        data.todos[i]=req.body
        s1=true
    }
    
    }

    if(s1=false){
        res.status(400).send("Invalid argument")
    }else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.status(200).json(data.todos)
        
    }

})

 app.listen(8080,()=>{
    console.log("running at port 8080")
})
 

 module.exports = app; 



// export the server
// eg.module.exports = app;
