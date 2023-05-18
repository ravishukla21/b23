//  import required modules from nodejs and build the server

const express=require("express")
const fs=require("fs");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    console.log(data,"data")
    let data1=JSON.parse(data);
    res.status(200).send(data1.tod)

})

app.post("/",(req,res)=>{
    //read
    const data=fs.readFileSync("./db.json","utf-8");
    console.log(data,"data")
    const data1=JSON.parse(data);
    console.log(data1,"data1")
    //append
    data1.todos.push(req.body)
    console.log(data1,"appned")
    //push into db.json
    fs.writeFileSync("./db.json",JSON.stringify(data1))
    res.status(200).json(data1.todos)
})
// app.get("/:id",(req,res)=>{

//     const {id}=req.params;
//     console.log(id,"id123")
//     let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
//     console.log(data,"data456000")
//     let s1=false
//     let send123
//     for(let i=0;i<data.todos.length;i++){
//         if(data.todos[i].id==id){
//            send123=data.todos[i]
//             s1=true
//         }
//     }
//     if(s1==false){
//         res.status(400).send("Invalid argument")
//     }else{
       
//         res.status(200).send(send123)
//     }
    
// })

app.put("/:id",(req,res)=>{
    const {id}=req.params;
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let s1=false
    for(let i=0;i<data.todos.length;i++){
        if(data.todos[i].id==id){
            data.todos[i]=req.body
            s1=true
        }
    }
    if(s1==false){
        res.status(400).send("Invalid argument")
    }else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.status(200).json(data.todos)
    }
})
app.delete("/:id",(req,res)=>{
    let { id } = req.params
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    let s1 = false
    let newdata =data.todos.filter((el) => {
        s1 = true
        return el.id != id
    })
    data.todos = newdata
  

    if (s1 == false) {
        res.status(400).send("Invalid argument")
    } else {
        fs.writeFileSync("./db.json", JSON.stringify(data))
        res.status(200).send(data.todos)

    }



})


app.listen(8080,()=>{
    console.log("server is running")
})


// export the server
// eg.module.exports = app;
module.exports = app;