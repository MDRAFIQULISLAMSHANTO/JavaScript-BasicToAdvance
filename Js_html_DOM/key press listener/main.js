//Loop
//listener event 
for ( var i=0; i<3;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        animationPlay(text);
        
    
     });
     document.addEventListener("keypress",function(event){
        var text = event.key;
        //document.write("you have pressed : " + text);
        audioPlay(text);
        animationPlay(text);

     });

}
function audioPlay(text){
    switch(text){
        case "a" : 
                var audio = new Audio('sounds/1.wav');
                audio.play();
                break;
        case "b" : 
                var audio = new Audio('sounds/2.wav');
                audio.play();
                break;
        case "c" : 
                var audio = new Audio('sounds/3.wav');
                audio.play();
                break;

    }

}
function animationPlay(text){
    var selectButton = document.querySelector("." + text);
    selectButton.classList.add("anim");


    setTimeout(() => {
        selectButton.classList.remove("anim");
        
    }, 1000);


}