// Write all the JS Code related to Favourites Page Here 
let fav=JSON.parse(localStorage.getItem("favour"));
//console.log(fav);
displaytable(fav);
function displaytable(fav){
    document.querySelector("tbody").innerHTML="";
    
    for (let i=0;i<fav.length;i++){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=fav[i].taskname;
    let td2=document.createElement("td");
    td2.innerText=fav[i].type;
    let td3=document.createElement("td");
    td3.innerText=fav[i].date;
    let td4=document.createElement("td");
    td4.innerText=fav[i].prio;
    
    row.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(row);

}
}