// for rest operator ...element (only use for last ) , packed and settle in a array
//speard operator can be use everywhere , unpack elements
/* 
let numbers = [1,2,3];

let numbers2 = [5,...numbers,6,7]; //spear operator = ...numbers
console.log(numbers2); */
/* let num1 = [1,2,3];
let num2 = [4,5,6];
console.log(...num1,...num2);//Concertinate  2 array  */

//Concertination two objects
let p1 = {
    name: "Shanto",
    age: 24
}
let p2 = {
    address : "Gawair",
    phone : 012344
}
let p = {...p1, ...p2};
console.log(p);