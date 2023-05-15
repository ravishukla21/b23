const fs = require("fs");



// complete the following fubctions




function isNumber(num) {
    if (isNaN(num)) {
        fs.writeFileSync('test.txt', "it is Not a Number.", function (error) {
            if (error) throw error
            console.log("saved")
        })
    } else {
        fs.writeFileSync('test.txt', "it is a Number.", function (error) {
            if (error) throw error
            console.log("saved")
        })
    }
}

function isStr(str) {
    if ((typeof (str) == "string") && isNaN(str)) {
        fs.writeFileSync('test.txt', "it is a String.", function (err) {
            if (error) throw err
            console.log("saved")
        })
    } else {
        fs.writeFileSync('test.txt', "it is Not a String.", function (err) {
            if (err) throw err
            console.log("saved")

        })

    }

}

function isArray(arr) {
    if (Array.isArray(arr)) {
        fs.writeFileSync('test.txt', "it is a Array.", function (error) {
            if (error) throw error
            console.log("saved")
        })
    } else {
        fs.writeFileSync('test.txt', "it is Not a Array.", function (err) {
            if (error) throw err
            console.log("saved")


        })


    }

}




function isObj(obj) {
    if (typeof obj == 'object' && !Array.isArray(obj)) {
        fs.writeFileSync('test.txt', "this is a object.", function (error) {
            if (error) throw error
            console.log("saved")
        })
    } else {
        fs.writeFileSync('test.txt', "this is not a object.", function (error) {
            if (error) throw error
            console.log("saved")
        })
    }
}
//cls
function cls() {
    fs.unlinkSync("./test.txt", (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("file is deleted successfully")
        }
    })
}

// Export All the functions

isNumber(25)


module.exports = {
    isNumber,
    isStr,
    isArray,
    isObj,
    cls
}