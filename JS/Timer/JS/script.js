
var startTime = document.getElementById("startTime");
var minspan= document.getElementById("min");
var secspan =document.getElementById("sec");
var time;
var intialtime;

document.querySelector('#min').textContent='00';
    document.querySelector('#sec').textContent='00'; 
startTime.addEventListener("input", function() {
  minspan.innerText = startTime.value.substring(0,2);
  secspan.innerText=startTime.value.substring(3,5);
  time= startTime.value;
  var stringtime=String(time);
  
   intialtime=((parseInt(stringtime.substring(0,2)))*60000)+(parseInt(stringtime.substring(3,5)))*1000;
   //document.getElementById("res").innerText=intialtime;
}, false);





// var intialtime=3000;
// var time = document.getElementById('inputtime');
// time.addEventListener("input",function(){
//     document.getElementsByClassName("enter").innerText=time.value;
// },false);

function timer(){

    var x=setInterval(function(){
         min=parseInt(intialtime/60000);
        var mm;
        var ss;
        if(min<10){
             mm='0'+min;
        }
        else{
            mm=min;
        }
         sec= (intialtime%60000)/1000;
        if(sec<10){
            ss='0'+sec;
       }
       else{
           ss=sec;
       }
        document.querySelector('#min').textContent=mm;
        document.querySelector('#sec').textContent=ss; 
         if(sec===0&&min===0){
            document.querySelector('#min').style.color='red';
            document.querySelector('#sec').style.color='red'; 
             clearInterval(x);
         }
         
         intialtime-=1000;
     },1000)
}
