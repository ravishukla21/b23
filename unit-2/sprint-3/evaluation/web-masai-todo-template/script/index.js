// Write all the JS Code related to Home Page Here
document.querySelector("form").addEventListener("submit", mytodo);
let todoarr = JSON.parse(localStorage.getItem("tasks")) || [];
var favarr = JSON.parse(localStorage.getItem("favour")) || [];

function mytodo(event) {
    event.preventDefault();
    let taskname = document.querySelector("#name").value;
    let type = document.querySelector("#type").value;
    let date = document.querySelector("#date").value;
    let prio = document.querySelector("#priority").value;
    console.log(taskname, type, date, prio);
    let taskobj = {
        taskname,
        type,
        date,
        prio,
    }
    todoarr.push(taskobj)
    localStorage.setItem("tasks", JSON.stringify(todoarr));
    displaytable(todoarr);

}
//displaytable(todoarr)
var favarr = [];

function displaytable(todoarr) {
    document.querySelector("tbody").innerHTML = "";

    for (let i = 0; i < todoarr.length; i++) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = todoarr[i].taskname;
        let td2 = document.createElement("td");
        td2.innerText = todoarr[i].type;
        let td3 = document.createElement("td");
        td3.innerText = todoarr[i].date;
        let td4 = document.createElement("td");
        td4.innerText = todoarr[i].prio;
        let td5 = document.createElement("td");
        td5.innerText = "Completed";
        td5.addEventListener("click", function () {
            favarr.push(todoarr[i]);
            console.log(favarr);
            localStorage.setItem("favour", JSON.stringify(favarr));


        })



        row.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(row);

    }

}


