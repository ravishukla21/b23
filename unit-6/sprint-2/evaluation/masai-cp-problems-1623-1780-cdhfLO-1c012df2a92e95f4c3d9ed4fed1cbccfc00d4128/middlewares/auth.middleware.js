const auth = (req,res,next) => {
  if(req.method=="DELETE" || req.method=="PATCH"){
    const {role,pass}=req.query

    if(role==="admin" && pass==="saveEarth"){
      next()
    }else{
      return res.send({ message: "Not Authorized" })
    }
    next()
  }
};

module.exports = {
  auth,
};

//+1
