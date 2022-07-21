// BOM(browser object model)
//window object
// location object

console.clear();

/* //href
console.log(location.href);


//protocol
console.log(location.protocol);
//hostname
console.log(location.hostname);
//port
console.log(location.port);
//pathname
console.log(location.pathname); */
 
//show BOM using Dom

//get Element
var locationDiv = document.querySelector(".location-div");

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.port;

var p4 = locationDiv.children[3];
p4.textContent = location.pathname;

var p5 = locationDiv.children[4];
p5.textContent = location.hostname;

//add website link with button using BOM

const myButton = document.getElementById("website");
myButton.addEventListener("click",function(){
    location.assign("https://github.com/MDRAFIQULISLAMSHANTO");
    
});