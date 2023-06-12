const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        try{
            jwt.verify(token,"ravi",(err,decoded)=>{
                if(decoded){
                    req.body.userid=decoded.userid
                    req.body.name=decoded.name
                    next()
                }else{
                    res.json({msg:"not authorized"})
                }
            })


        }catch(err){

            res.json({error:err.message})

        }
    }else{
    
    res.json({msg:"please login"})
    }
}


module.exports={
    auth
}