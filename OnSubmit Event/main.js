//find the elements
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");


//add Event Listener
form.addEventListener("submit",formHandler);
//function
function formHandler(e){
    e.preventDefault();

    //creating object for data pass
    const userInfo = {
        name : name.value,
        email : email.value,
        password : password.value,
};
    console.log(userInfo);
    name.value="";
    email.value = "";
    password.value = "";



    }
    


