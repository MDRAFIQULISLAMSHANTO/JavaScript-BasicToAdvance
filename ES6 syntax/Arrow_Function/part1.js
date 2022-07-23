//arrow function --> const function=()=>{}
//classic
function message1(){
    return "Hi!I am 1";
}
//arrow function
const message2=()=>{return "Hi!I am 2";}
const message3=()=>"Hi!I am 3"; //in arrow function no need to use returna and {} for single line statement
console.log(message1());
console.log(message2());
console.log(message3());

//Parameter pass
const add=(num1,num2)=> num1+num2;
console.log(add(10,20));