document.querySelector("form").addEventListener("submit",myTodo);
function myTodo(event){
    event.preventDefault();
    let taskname=document.querySelector("#task").value;
    let taskPriority=document.querySelector("#priority").value;
    console.log(taskname,taskPriority)
    displayTable(taskname,taskPriority)
}
function displayTable(taskname,taskPriority){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=taskname;
    let td2=document.createElement("td");
    td2.innerText=taskPriority;
    if(taskPriority=="High"){
        td2.style.backgroundColor="red"
    }else{
        td2.style.backgroundColor="green"
    }
    let td3=document.createElement("td");
    td3.innerText="ADD as a fav";
    row.append(td1,td2,td3);
    document.querySelector("tbody").append(row);


}
