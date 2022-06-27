//query selectoor
document.querySelector("li a").innerHTML = "new text"
//for class . need to use berfore class name
document.querySelector(".my-div").innerHTML= "shanto"
//all selector with index
document.querySelectorAll("p")[1].innerHTML= "dkfmkkkkkkkkkkkkkkkk"
document.querySelectorAll("p")[0].innerHTML= "fghhfghgh"
 //alert function
 var para = document.querySelector("#peraId")
 var cat = document.querySelector("#catImageId")
 function myMessage(){
    //alert("I am shanto");
    para.innerHTML="cat 1"
    cat.src = "images/cat1.jfif"

 }
function myMessage2(){
    //alert("heyyyyyyy!")
    para.innerHTML="cat 2"
    cat.src = "images/cat2.jfif" //image source 
}