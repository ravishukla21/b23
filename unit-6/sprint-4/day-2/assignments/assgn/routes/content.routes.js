const express = require("express");
const contentRouter = express.Router();
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth.middleware");
contentRouter.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "This is the your Home page" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
contentRouter.get("/about", auth, (req, res) => {
  try {
    res.status(200).json({ msg: "This is the your about page" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

contentRouter.get("/movies", auth, (req, res) => {
  try {
    res.status(200).json({ msg: "This is the your movies" });
  } catch (error) {
    console.log(token);
    res.status(400).json({ error: error.message, token });
  }
});
contentRouter.get("/series", auth, (req, res) => {
  try {
    res.status(200).json({ msg: "This is the your series" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
contentRouter.get("/products", auth, (req, res) => {
  try {
    res.status(200).json({ msg: "This is the your products" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
contentRouter.get("/todos", auth, (req, res) => {
  try {
    res.status(200).json({ msg: "This is the your todos" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  contentRouter,
};
