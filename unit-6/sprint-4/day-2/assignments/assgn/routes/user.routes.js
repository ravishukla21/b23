const express = require("express");
const { usermodel } = require("../users.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth.middleware");
const { blacklist } = require("../blacklist");
//register
userRouter.post("/register", async (req, res) => {
  const { name, email, pass, age } = req.body;
  try {
    bcrypt.hash(pass, 5, async function (err, hash) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        const user = new usermodel({ name, email, pass: hash, age });
        await user.save();
      }
    });
    const entry = await usermodel.find();
    res.status(200).json({ msg: "New use has been added", updated: req.body });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//login
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await usermodel.findOne({ email });

    if (user) {
      bcrypt.compare(pass, user.pass, function (err, result) {
        if (result) {
          var token = jwt.sign({ email: "abhi" }, "abhi", {
            expiresIn: 99,
          });
          var rToken = jwt.sign({ email: "abhi" }, "raskar", {
            expiresIn: "1 day",
          });
          res
            .status(200)
            .json({ msg: "login successful", token: token, rToken });
        } else {
          res.status(200).json({ msg: "wrong credentials" });
        }
      });
    } else {
      res.status(200).json({ msg: "user not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//logout route

userRouter.get("/logout", auth, (req, res) => {
  let token = req.headers.authorization?.split(" ")[1];
  try {
    blacklist.push(token);
    res.status(200).json({ msg: "it has loged out plesae login again" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
module.exports = {
  userRouter,
};
