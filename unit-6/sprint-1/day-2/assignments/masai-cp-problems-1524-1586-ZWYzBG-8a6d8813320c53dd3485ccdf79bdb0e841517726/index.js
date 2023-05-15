const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


const fileup=()=>{

  switch (operation) {
    // complete the fillowing function.
    case "read":
      return fs.readFileSync(file,"utf-8")
    case "delete":
      return fs.unlinkSync(file)
    case "create":
      return fs.writeFileSync(file,content+"\n")
    case "append":
      return fs.appendFileSync(file,"\n"+content)
    case "rename":
      return fs.renameSync(file,content)
    case "list":
      return fs.readdirSync(file)
      
    default:
      console.log(`Invalid operation '${operation}'`);
  }
  

}

let data=fileup()
console.log(data)

