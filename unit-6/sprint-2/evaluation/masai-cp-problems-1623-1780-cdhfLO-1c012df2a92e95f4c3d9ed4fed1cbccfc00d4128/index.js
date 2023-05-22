//  do not forgot to export server
// module.exports = app;

const express=require("express");
const app=express();
const fs=require("fs")




const {auth}=require("./middlewares/auth.middleware")
 const {addID}=require("./middlewares/addID.middleware")
 const {logger}=require("./middlewares/logger.middleware")


app.use(logger)
app.get("/",(req,res)=>{
    
 res.send("homepage")
})

app.post("/add/hero",(req,res)=>{

    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    console.log(addID,"addID")

   console.log(JSON.parse(req.body),"bodyreq")
 

    try{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send(data)
    }catch(err){
        res.send(err)
    }
})

app.get("/heroes",(req,res)=>{
    //read
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    //append
    // console.log(data,"ddata")
    try{
        res.send(data.heroes)
    }catch(err){
        res.send(err)
    }
})

app.patch("/update/villain/:hero_id",auth,(req,res)=>{
    let {hero_id}=req.params;
    hero_id=+hero_id;
    console.log(typeof hero_id,hero_id,"heroid")
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let checkhero=data.heroes.find((el)=>{
        if(el.id==hero_id){
            return true
        }else{
            return false
        }
    })

    if(checkhero){

        let abra=data.heroes.filter((el)=>{
        
            return el.id!==hero_id
        }
        )
        console.log(abra,"abra")
    
       let  data123=data.heroes[hero_id].villains
       console.log(data123,"data123")
    
       const updateddata123=[...data123,req.body]
    
      console.log(updateddata123,"updated")
     console.log(hero_id,"heroid")
    
     let final123= data.heroes.find((el)=>{
        return el.id == hero_id
     })
     console.log(final123,"final123")
     final123.villains=updateddata123
     console.log(final123,"final456")
    
     abra.push(final123)
    
     console.log(abra,"abracheckfinal")
     data.heroes=abra
    
    
     fs.writeFileSync("./db.json",JSON.stringify(data))
     res.send(final123)

    }else{
        res.send({ message: "Hero not found"})
    }

    


  


   

})


app.delete("/delete/hero/:hero_id",auth,(req,res)=>{
    let {hero_id}=req.params
    

    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let s1=false

    let newdata=data.heroes.filter((el)=>{
        s1=true;
        return el.id!=hero_id
    })
  console.log(newdata,"newdata");
    data.heroes=newdata;
     try{
        if(s1==true){
             fs.writeFileSync("./db.json",JSON.stringify(data))
             res.send(data.heroes)
         }

     }catch(err){
        if(s1==false){
            console.log(err)

        }
        
     }
        

   
   
})





app.listen(8080,()=>{
    console.log("running")
})
module.exports = app;
