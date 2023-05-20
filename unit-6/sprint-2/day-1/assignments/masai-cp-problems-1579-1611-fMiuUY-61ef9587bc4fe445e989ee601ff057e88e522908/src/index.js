// import required modules

// export the server
// eg.module.exports = app;
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    const data = fs.readFileSync("./access.log", "utf-8")

    console.log(data, "data")

    fs.writeFileSync("./access.log", JSON.stringify(data))

    res.status(200).send({
        "message": "welcome to server"
    })
})

// app.listen(8500, () => {
//     console.log("server is running at 8080 port")
// })

module.exports = app;