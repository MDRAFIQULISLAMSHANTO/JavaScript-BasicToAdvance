
var img= ["1.jpg","2.jpg","3.png","4.png"]
var imgTag = document.querySelector("img");
var count = 0;


function prev(){
    count--;
    if (count <0){
        count = img.length -1;
        imgTag.src= img[count];
    }
    else{
     
    imgTag.src= img[count];}

  



}

function next(){
    count++;
    if (count >= img.length){
        count = 0;
        imgTag.src= img[count];
    }
    else{
     
    imgTag.src= img[count];}





    
}