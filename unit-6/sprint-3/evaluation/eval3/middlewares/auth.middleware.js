const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        try{
            const decoded=jwt.verify(token,"ravi")
            if(decoded){
                next()
            }else{
                res.json({msg:"token not verified"})
            }
        }catch(err){
        res.json({err:err.message})
        }
    }else{
        res.json({msg:"login again"})
    }
}

module.exports={
    auth
}