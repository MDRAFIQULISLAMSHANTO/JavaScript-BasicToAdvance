//for ....of and for in

//for ...of
/* const names = ["s1","s2","s3","s4"];
for(let name of names){
    console.log(name);
} */

//for...in
let students = {
    Id : 234,
    name: "shanto",
    cgpa: 456

}
console.log(`here`);
for(let x in students){
    console.log( `${x} : ${students[x]}`);
}