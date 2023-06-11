const jwt = require("jsonwebtoken");
const { blacklist } = require("../blacklist");
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    if (blacklist.includes(token)) {
      res.json({ msg: "please login again" });
    }
    try {
      const decoded = jwt.verify(token, "abhi");
      if (decoded) {
        next();
      } else {
        res.status(200).json({ msg: "token is not recognised" });
      }
    } catch (err) {
      res.status(200).json({ msg: err.message });
    }
  } else {
    res.send(400).json({ msg: "please login" });
  }
};
module.exports = {
  auth,
};
