
var buttonstart=document.querySelector("#start")
var buttonstop=document.querySelector("#stop")
var buttonreset=document.querySelector("#reset")
document.querySelector("#countdown").innerHTML="00"+":"+"00"; 

//var startingminutes= document.querySelector("#input1").value;

//document.querySelector("#countdown").innerHTML=startingminutes;

var interval;
var countdownel;
var xi;
var snew


buttonstart.addEventListener("click", () =>{
   // clearInterval(interval);
   var startingminutes= document.querySelector("#input1").value;
   document.querySelector("#countdown").innerHTML=startingminutes ;
   //console.log(startingminutes)
   //alert(startingminutes)
   
    interval=starttime(startingminutes);
    

});





function starttime(startingminutes) {
    //var startingminutes = document.querySelector("#countdown").innerHTML;

    let time = startingminutes * 60;
    var countdownel = document.querySelector("#countdown");

    var xi=setInterval(update, 1000);

    function update() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        (seconds < 10) ? seconds = ("0" + seconds) : seconds = seconds;
        countdownel.innerHTML = minutes + ":" + seconds;
        time--;
        buttonstop.addEventListener("click",() =>{
            //var startingminutes= document.querySelector("#countdown").innerHTML;
             clearInterval(xi);
             
            
            //document.querySelector("#input1").value=startingminutes ;
          });
          buttonreset.addEventListener("click",() =>{
            clearInterval(xi);
            document.querySelector("#countdown").innerHTML="00"+":"+"00"; 
         });

    }

};


