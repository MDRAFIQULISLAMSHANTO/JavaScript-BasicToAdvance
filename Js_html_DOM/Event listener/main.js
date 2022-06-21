//single elelment listenr 
var myVar = document.querySelector("h1")
myVar.addEventListener("mouseover", function(){
    myVar.classList.add("h1-style");
});
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("h1-style");
});

//listener with multiple element
var len = document.querySelectorAll(".myButton").length;
for(var i=0;  i<len; i++){
   document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    
    var myvar2= myVar.innerHTML=text + "is clicked";
    myvar2.classList.remove("h1-style");
   });


}
