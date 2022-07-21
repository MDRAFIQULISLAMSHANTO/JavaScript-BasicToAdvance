
// Error handling -> try , catch, finally , throw
// try ... catch handle run time errors (program which is runable), but not syntax error
// Error object
// The finally statement -> execute code, after try and catch 
//try,catch,finally
try{
    // code test
    alert("Hi Everyone");
    alert(x);
    alert("Not gonna work");   

}catch(err){
    console.log(err);
}finally{
    alert("Bye Everyone");
}
//finally
// The throw statement -> create custom errors.

document.querySelector("#checkButton").addEventListener("click",function(){
   
    var num = document.querySelector("#numTextfield").value;
    
    try{
        if(num < 5)
        {
            throw "input is too low"
        } else if(num > 10)
        {
            throw "input is too high"
        }

    }catch(err){
        console.log(err);
    }

})