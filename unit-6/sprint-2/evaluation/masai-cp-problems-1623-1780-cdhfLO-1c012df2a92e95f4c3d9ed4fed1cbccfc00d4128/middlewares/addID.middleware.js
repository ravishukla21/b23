const fs=require("fs")
const addID = (req,res,next) => {
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
  
  console.log(data.heroes.length,"datainid")
  let length=data.heroes.length

 next();

};

module.exports = {
  addID,
};

//+1
