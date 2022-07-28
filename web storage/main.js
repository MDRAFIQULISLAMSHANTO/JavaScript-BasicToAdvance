//          Local Storage----------------------
// Web storeage API-- allows store & read data in browser
// web Stroage API -- localStorage, sessionStorage
//localStorage -- store, read, update, and remove data
// no expiry date : data never gets lost even if you close the browser
//10mb memory
//localstorage store data as key value pair - string
//------------------------------------------setItem(key, value)
/* localStorage.setItem("userName","Shanto");
localStorage.setItem("password", "shanto@007");

//------------------------------------getItem(key)
const userName = localStorage.getItem("userName");
const password =  localStorage.getItem("password");
console.log(userName,password)

//------------ removeItem(key)
localStorage.removeItem("userName"); */

// for array
/* const countries = ["ban", "pak", "india"];
localStorage.setItem("countries", JSON.stringify(countries));
//get(key)
const country = JSON.parse(localStorage.getItem("countries"));
console.log(country);
//clear
localStorage.clear(); */


//          session Storage------------------------
/* // 5mb memory
// clear data when turn of browser
const countries = ["ban", "pak", "india"];
sessionStorage.setItem("countries", JSON.stringify(countries));
//get(key)
const country = JSON.parse(sessionStorage.getItem("countries"));
console.log(country);
/* //clear
sessionStorage.clear();
 */


//              cookkies---------------------------------------

    //set
    document.cookie = "userName = shanto; expires = thrusday, 28 July 2022 15:48:00 GMT";

    console.log(document.cookie);

