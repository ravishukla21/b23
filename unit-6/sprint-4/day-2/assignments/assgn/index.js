const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { contentRouter } = require("./routes/content.routes");
const jwt = require("jsonwebtoken");
app.use("/users", userRouter);
app.use("/content", contentRouter);

app.get("/refresh", (req, res) => {
  const Token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(Token, "raskar");
  if (decoded) {
    const token = jwt.sign({ email: "abhi" }, "abhi", {
      expiresIn: 60,
    });
    res.send(token);
  } else {
    res.send("invalid token");
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Running at port 8080");
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
  }
});
