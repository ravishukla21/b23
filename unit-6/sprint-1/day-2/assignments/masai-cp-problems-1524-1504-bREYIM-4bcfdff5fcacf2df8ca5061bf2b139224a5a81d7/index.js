// index.js

//  import the crypto module

const crypto=require("crypto")


//  get a commands using process.argv
const operation=process.argv[2]
const num1=+process.argv[3]
const num2=+process.argv[4]

// console.log(num1+num2,"nan")


// complete the  function



const Calculate=()=>{
  switch (operation) {
    case "add":
      return num1+num2
    case "sub":
      return num1-num2
    case "mult":
      return num1*num2
    case "divide":
      return num1/num2;
    case "sin":
      return Math.sin(num1);
    case "cos":
      return Math.cos(num1);
    case "tan":
      return Math.tan(num1);
    case "random":
      if(!num1){
        return "Provide length for random number generation."

      }else{
        const val=crypto.randomBytes(num1)
        return val.toString("bi")

      }
    
    
    default:
      console.log("Invalid operation");
  }
  
}

console.log(Calculate());
