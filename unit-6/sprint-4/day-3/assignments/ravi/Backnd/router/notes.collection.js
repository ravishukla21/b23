const {Router}=require("express")
const {NotesModel}=require("../model/notes.model")

const noterouter=Router()

noterouter.post("/create",async(req,res)=>{
try{
const note=new NotesModel(req.body)
await note.save()
res.status(200).send({"msg":"Created Notes","note":note})
}catch(er){
    res.status(200).send({"msg":er.message})
}
})

noterouter.get("/",async(req,res)=>{
    try{
const notes=await NotesModel.find({autherId:req.body.autherId})
res.status(200).send(notes)
    }catch(er){
        res.status(200).send(er.message)
    }
})

noterouter.patch("/update/:notesId",async(req,res)=>{
    const {notesId}=req.params
    const notes =await NotesModel.findOne({_id:notesId})
try{
    if(req.body.autherId!==notes.autherId){
        res.status(200).send("You are not authorised")
    }else{
        await NotesModel.findByIdAndUpdate({_id:notesId},req.body)
        res.status(200).send("Data Updated Successfully")
    }
    
}catch(er){
    res.status(200).send("Something went wrong")
}
})

noterouter.delete("/delete/:noteId",async(req,res)=>{
    const {noteId}=req.params
    const notes =await NotesModel.findOne({_id:noteId})
    try{
        if(req.body.autherId!==notes.autherId){
            res.status(200).send("You are not authorised")
        }else{
            await NotesModel.findByIdAndDelete({_id:noteId})
            res.status(200).send("Data Deleted Successfully")
        }
        
    }catch(er){
        res.status(200).send("Data Updated Successfully")
    }
})

module.exports={
    noterouter
}