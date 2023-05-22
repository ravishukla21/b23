
const fs=require("fs")
const logger = (req,res,next) => {
  const log1=`URL: ${req.url}, Method: ${req.method}, Timestamp: ${new Date().toString()}\n`
  fs.appendFileSync("./logs.txt",log1)
  next()
};

module.exports = {
  logger,
};

//+0.5
