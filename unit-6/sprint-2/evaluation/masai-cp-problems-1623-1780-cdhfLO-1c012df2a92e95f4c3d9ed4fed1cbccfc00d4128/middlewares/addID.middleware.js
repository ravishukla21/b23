const fs=require("fs")
const addID = (req,res,next) => {
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
  
  console.log(data.heroes.length,"datainid")
  const last=data.heroes[data.heroes.length-1]
  const newID=last? last.id+1 :1
 
  req.body.id=newID

 next();

};

module.exports = {
  addID,
};

//+1
