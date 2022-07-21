//Js BOM
// js timing events
// SetTimeOut(), setInterval()

/*     function myButton(){
        let button =  document.getElementById("myButton")
 button.addEventListener("click",function() {
    console.log("Clicked");
 });

    }
  //setTimeout(myButton, 2000);
  setTimeout(myButton, 3000); */

  //----------- CLOCK-------------
  var text = document.querySelector("#text");
  var button =  document.querySelector("#myButton");
  button.addEventListener("click", startClock);
   function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds =  date.getSeconds();
    minutes = formetTime(minutes);
    seconds = formetTime(seconds);
    let time = hours + ":" + minutes + ":" + seconds;
    text.textContent =  time;


    setInterval(startClock, 1000);

   };
function formetTime(value){
    if (value < 10) {
        value = "0" + value;
        
    }
    return value;
}