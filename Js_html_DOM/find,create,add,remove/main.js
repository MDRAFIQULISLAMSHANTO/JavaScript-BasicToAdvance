//creating html element 

var heading3 = document.createElement("h1"); //Element Call
var text = document.createTextNode("This is heading-3"); //text

// add text with element
heading3.appendChild(text);
var myDev = document.getElementById("my-div");//call class/id from html 
//add element within the class.
myDev.appendChild(heading3);

//remove element
var heading2 = document.getElementsByTagName("h1")[1];
myDev.removeChild(heading2);
 //find class
 document.getElementById("my=div").classList;
 document.getElementById("my=div").classList.add("");//add class
 document.getElementById("my=div").classList.remove("");//remove class
 


