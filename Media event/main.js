//  Audio/video events
//  canplay, play, playing, pause, progress, ended, volumechage, waiting

//call tag form html file using queryselector
const video = document.querySelector("video");
//add listener event for the taf/element
video.addEventListener("canplay",function(){
    console.log("canplay");

});
video.addEventListener("play",function(){
    console.log("play");

});
video.addEventListener("pause",function(){
    console.log("pause");

});
video.addEventListener("playing",function(){
    console.log("playing");

});
video.addEventListener("ended",function(){
    console.log("The Video is ended");

});