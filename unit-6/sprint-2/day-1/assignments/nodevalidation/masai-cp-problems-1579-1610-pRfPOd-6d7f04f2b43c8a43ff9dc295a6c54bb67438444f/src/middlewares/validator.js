const fs = require("fs");

// make the validator function and export it.
function checkArray(arr){
    for(let i=0;i<arr.length;i++){
        if (typeof arr[i] !=="string") return false;

    }
    return true
}
const validator = (req, res, next) => {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;
    if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
        res.status(400).send("invalid request body.\n")
    } else {
        if (
            typeof ID !== "number" ||
            typeof Name !== "string" ||
            typeof Rating !== "number" ||
            typeof Description !== "string" ||
            typeof Genre !== "string" ||
            !Array.isArray(Cast) ||
            !checkArray(Cast)

                ){
                    fs.appendFileSync("./res.txt","bad request.some data is incorrect.\n");
                    res.status(400).send("bad request.some data is incorrect.")
                }else{
                    fs.appendFileSync("./res.txt","ID is a number\n")
                    fs.appendFileSync("./res.txt","Name is a string\n")
                    fs.appendFileSync("./res.txt","Rating is a number\n")
                    fs.appendFileSync("./res.txt","Description is a string\n")
                    fs.appendFileSync("./res.txt","Genre is a string\n")
                    fs.appendFileSync("./res.txt","Cast is a array of string\n")
                    next()
                }
    }


}


// module.exports = validatorfunction;
module.exports = validator