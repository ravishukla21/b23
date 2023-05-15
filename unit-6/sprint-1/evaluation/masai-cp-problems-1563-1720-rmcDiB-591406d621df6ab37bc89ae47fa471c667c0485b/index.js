const http = require("http")
const fs = require("fs")
const os = require("os")
const dns=require("node:dns")
const app = http.createServer((req, res) => {
    if (req.url == "/") {
        res.setHeader("Content-type","text/html")

        res.end("<h1>Welcome to the Home Page</h1>")
    }else if(req.url=="/add/student"){
        const userData=JSON.parse(fs.readFileSync("./db.json","utf-8"))
        const newData={
            id:os.userInfo().uid,
            name:os.userInfo().username,
            age:40241,
            location:"dehradun",
            tickets:[{

                "ticket_id": 3,
                "title": "LMS Issue1321",
                "body": "My LMS is not showing the lectures46545"

            }]
        }

         userData.students.push(newData);
        

        fs.writeFile("./db.json",JSON.stringify(userData)
        ,(err)=>{
            if(err){
                res.end(err)
            }else{
                res.end(newData)
            }
        })
            
        
       
        



    }else if(req.url=="/add/instructor"){
        const userData=JSON.parse(fs.readFileSync("./db.json","utf-8"))
        const newData={
            id:os.userInfo().uid,
            name:os.userInfo().username,
            age:23,
            location:"delhi",
            sub:"java",
            exp:2
        }

        let newdata123=userData.instructors.push(newData);
        try{

            fs.writeFileSync("./db.json",JSON.stringify(newdata123))
            res.end(newdata123)
        }
        catch(err){
            res.end(err)

        }
       
        



    }else if(req.url=="/students"){
        let stud=JSON.parse(fs.readFileSync("./db.json","utf-8"))
        const {students}=stud
        console.log(students,"students")
        try{
            res.end(students)
        }catch(err){
            res.end(err)
        }

    }else if(req.url=="/instructors"){
        let stud=JSON.parse(fs.readFileSync("./db.json","utf-8"))
        const {instructors}=stud
        console.log(instructors,"students")
        try{
            res.end(instructors)
        }catch(err){
            res.end(err)
        }

    }else if(req.url=="/tickets"){
        let count=JSON.parse(fs.readFileSync("./db.json","utf-8"))
        // console.log(count)
       
        try{
            const {students}=count;

            console.log(students,"students")
            let count456=0
            let sum=0
            for(let i=0;i<students.length;i++){
              sum=sum+students[i].tickets.length
              
           
            }
            console.log(sum,"count456")
            res.end(`Total number of tickets in the system are ${sum}`)

        }catch(err){
            res.end(err)

        }


       
    }else if(req.url=="/address"){
      dns.lookup("masaischool.com",(err,address,family)=>{
        if(err){
            res.end(err)
        }else{
           res.end(`URL: masaischool.com IP Address: ${address} Family: IPv${family}`)
        }

      })
    }
})


// export server
// module.exports = app
// app.listen(8080, () => {
//     console.log("server running")
// })
module.exports = app

//  {
//     "id": 1,
//     "name": "Aman",
//     "age": 23,
//     "location": "Pune",
//     "tickets": [
//         {
//             "ticket_id": 1,
//             "title": "LMS Issue",
//             "body": "My LMS is not showing the lectures"
//         },
//         {
//             "ticket_id": 2,
//             "title": "Attendance",
//             "body": "Even though I have attended the lecture, I am marked absent"
//         }
//     ]
// },



// {
//     "students": [
//         {
//             "id": 1,
//             "name": "Aman",
//             "age": 23,
//             "location": "Pune",
//             "tickets": [
//                 {
//                     "ticket_id": 1,
//                     "title": "LMS Issue",
//                     "body": "My LMS is not showing the lectures"
//                 },
//                 {
//                     "ticket_id": 2,
//                     "title": "Attendance",
//                     "body": "Even though I have attended the lecture, I am marked absent"
//                 }
//             ]
//         },
//         {
//             "id": 501,
//             "name": "pulkittyagi",
//             "age": 25,
//             "location": "Delhi",
//             "tickets": [
//                 {
//                     "ticket_id": 20,
//                     "title": "New Ticket",
//                     "body": "Ticket Body"
//                 }
//             ]
//         }
//     ],
//     "instructors": [
//         {
//             "id": 1,
//             "name": "Chunnu",
//             "age": 45,
//             "location": "Patna",
//             "sub": "React",
//             "exp": 10
//         },
//         {
//             "id": 2,
//             "name": "Payal",
//             "age": 32,
//             "location": "Delhi",
//             "sub": "Node",
//             "exp": 4
//         },
//         {
//             "id": 501,
//             "name": "pulkittyagi",
//             "age": 25,
//             "location": "Delhi",
//             "sub": "Blockchain",
//             "exp": 4
//         }
//     ]
// }