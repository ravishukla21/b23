const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
       try{
        const decode=jwt.verify(token,"masai")
        if(decode){
            req.body.author=decode.author
            req.body.autherId=decode.autherId
            next()
        }else{
            res.status(200).send("PLEASE LOGIN")
        }
       }catch(er){
        res.status(200).send(er.message)
       }

    }else{
        res.status(200).send("PLEASE LOGIN")
    }
}

module.exports={
    auth
}