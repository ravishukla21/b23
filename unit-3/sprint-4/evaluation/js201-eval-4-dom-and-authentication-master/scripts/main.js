// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;

let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

loginUserButton.addEventListener("click", async function () {
  let userName = loginUserUsername.value;
  let password = loginUserPassword.value;
  let userObj = {
    username: userName,
    password: password
  }
  console.log(userObj)
  try {
    let res = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userObj)

    })
    let datas = await res.json();
    console.log(JSON.stringify(datas));
    console.log("hello", datas.user.username)
    userAuthToken = datas.accessToken;
    userId = datas.user.id;
    console.log(userAuthToken, "jhbjhb", userId)
    localStorage.setItem("localAccessToken", datas.accessToken);
    localStorage.setItem("userId", datas.user.id)

    //console.log(res)
    // < h5 class="notification info" >
    //   hey < username >, welcome back!
    //     </h5 >
    if (res.ok) {
      //alert("logged")
      notificationWrapper.innerHTML = `
      <h5 class="notification info">
      hey ${datas.user.username}, welcome back!
      </h5>
      `



    } else {
      alert("wrong")
    }

    // .then(res=>{
    //   return res.json()
    // })
    // .then(data=> console.log(JSON.stringify(data)))

  } catch (error) { console.log("error") }



});

// console.log("eryi",baseServerURL)
// console.log(userId)
getTodoButton.addEventListener("click", async function fetchtodos() {
  let userAuthToken = localStorage.getItem("localAccessToken") || null;
  let userId = +localStorage.getItem("userId") || null;
  console.log(baseServerURL, userId)
  let data1 = await fetch(`${baseServerURL}/todos?userId=${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userAuthToken}`
    }
  })
  //console.log(data1)
  if(data1.ok==true){
    let all =await data1.json();
    console.log("uyguigjbjhk",all)
  
//   let data12 = await data1.json();
//   console.log(JSON.stringify(data12))
//   let data123 = JSON.stringify(data12)
//   console.log("newnew",data123)
  

//  for(let elem of data12){
//   console.log(elem)
//   //hoja(elem)
//  }
  mainSection.innerHTML = `
       <div id="todo-list-wrapper" class="todo-list-wrapper">
       
       ${all.map((item)=>{
              //return JSON.stringify(item)
         var new1=document.createElement("label");
         
         new1.innerHTML=`${item}`

         return new1;

       }).join("") }
       
      

      </div >

  `
      }

})

//<div id="todo-list-wrapper" class="todo-list-wrapper">
  //...
  //...
 // ...
//</div>