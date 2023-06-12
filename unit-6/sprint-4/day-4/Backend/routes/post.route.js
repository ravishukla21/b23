const {PostModel}=require("../models/post.model");
const {Router}=require("express");
const postRouter=Router();

const {auth}=require("../middleware/auth.middleware");
postRouter.use(auth);


postRouter.post("/add",async(req,res)=>{
    try{
        const post =new PostModel(req.body);
        await post.save()
        res.status(200).json({msg:"new post has been created by",name:req.body.name})
    }catch(err){
        res.status(200).send(err.message)

    }
})


postRouter.get("/",async(req,res)=>{
    const {userid}=req.body;
    const {device}=req.query;
    let obj={}
    if(userid){
        obj.userid=userid
    }
    if(device){
        obj.device=device
    }

    try{
        const notes=await PostModel.find(obj)
        if(notes){
            res.status(200).send(notes)
        }
    }catch(err){
        res.status(200).json({error:err.message})

    }
})

postRouter.patch("/update/:postid",async(req,res)=>{
    const useridinuserdoc=req.body.userid
    const {postid}=req.params;
    try{
        const post=await PostModel.findOne({_id:postid})
        const userinpostdoc=post.userid
        if(useridinuserdoc===userinpostdoc){
            await PostModel.findByIdAndUpdate({_id:postid},req.body)

            res.status(200).json({msg:`${post.title} has been updated`})
        }else{
            res.status(200).json({msg:"Not Auth"})
        }


    }catch(err){
        
    res.status(200).json({error:err})
    }
})


postRouter.delete("/delete/:postid",async(req,res)=>{
    const useridinuserdoc=req.body.userid
    const {postid}=req.params;
    try{
        const post=await PostModel.findOne({_id:postid})
        const userinpostdoc=post.userid
        if(useridinuserdoc===userinpostdoc){
            await PostModel.findByIdAndDelete({_id:postid})

            res.status(200).json({msg:`${post.title} has been deleted`})
        }else{
            res.status(200).json({msg:"Not Auth"})
        }


    }catch(err){
        
    res.status(200).json({error:err})
    }
})




module.exports={
    postRouter
}


