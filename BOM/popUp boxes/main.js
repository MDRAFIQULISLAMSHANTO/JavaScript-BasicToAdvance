// JS BOM
//POP-UP boxes - alert, confirm, prompt

function welcomeMessage(){
    var name =  prompt("Enter Your Name : ");
    let text;
    //create h1 from js using DOM
    var h1 = document.createElement("h1");
    if (name == null || name == "") {
        text = "There are no name found";
        
    } else {
        text = "Welcome "+ name;
        
    }
    //passing text value 
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    //adding h1 tag in the body of the browser
    document.body.appendChild(h1);


}




welcomeMessage();