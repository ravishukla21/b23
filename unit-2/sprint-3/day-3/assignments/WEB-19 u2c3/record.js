// fill in javascript code here// fill in javascript code here
document.querySelector("form").addEventListener("submit",mydoc);
function mydoc(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let id=document.querySelector("#employeeID").value ;
    let dept=document.querySelector("#department").value;
    let exp=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mob=document.querySelector("#mbl").value;
    console.log(name,id,dept,exp,email,mob);
    displayintable(name,id,dept,exp,email,mob);
    
}
     let row=document.createElement("tr");
function displayintable(name,id,dept,exp,email,mob){
    // row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=name;
    let td2=document.createElement("td");
    td2.innerText=id;
    let td3=document.createElement("td");
    td3.innerText=dept;
    let td4=document.createElement("td");
    td4.innerText=exp;
    let td5=document.createElement("td");
    td5.innerText=email;
    let td6=document.createElement("td");
    td6.innerText=mob;
    let td7=document.createElement("td");
    if(exp>5){
        td7.innerText="Senior";

    }else if(exp>=2 && exp<=5){
        td7.innerText="Junior";
    }else if (exp<=1){
        td7.innerText="Fresher";
    }
    let td8=document.createElement("td");

    td8.innerText="Delete";
    td8.addEventListener("click",myfun);
    




    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);

    
    

}

function myfun(event){
    let yiu=document.querySelector("row").value;
    console.log(yiu);


}



