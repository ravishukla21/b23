const logger = (req,res,next) => {
  const log1=`URL:${req.url},Method:${req.method},Timestamp:${new Date().toString()}`
  next()
};

module.exports = {
  logger,
};

//+0.5
