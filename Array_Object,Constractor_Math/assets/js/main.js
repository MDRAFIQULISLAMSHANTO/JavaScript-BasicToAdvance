/* //Array - array is a object , collection of variables 
var names  = new Array(7);
names[0] = "anis";
names[1] = "anis";
names[2] = "anis";
names[3] = "anis";
names[4] = "anis";
names[5] = "anis";
names[6] = "anis";
console.log(names);
//another way && Push pop
var names = ["shanto", "sakib", "shahin"];
console.log(names);
console.log(names.length);
names.push("sajib");
console.log(names);
console.log(names.length);

names.pop();
console.log(names);
console.log(names.length);
// Concatition or add two array
var country1 = ["banglasesh", "nepal"];
var country2 = ["india", "austrilia"];
var country = country1.concat(country2);
console.log(country);
 */
/* 
//Array & Loop --

var sum = 0; 
var num = new Array();

for(var i=0; i<5; i ++){
    num[i]= parseInt(prompt("array: "));
    //var sum =+ num[i];
    console.log(num[i]);
    sum =  sum + num[i];
    
}
console.log(sum); */
// Array related Methods
/* var names = ["shanto","rakib"];
console.log(names);
names.shift();// opposite of pop
console.log(names);
names.unshift("Jubayer"); // opposite of push
console.log(names);
//slpice
//adding 
names.slice(2,0,"shanto","rajuijosdhhf");//(index no, nuim of add, value)
console.log(names);
//remove 
names.slice(1,2);
console.log(names); */
//Sorting
/* //alphabatecally

var names = ["shanto","rakib","akib","mina"];

var SortedNames = names.sort();
console.log(names);
names.reverse();
console.log(names); */
/* //Sorting number
var num = [20,3,54,7];
num.sort(function(a,b){
    return a-b;

});
console.log(num);
//for reverse
num.sort(function(a,b){
    return b -a ;

});
console.log(num); */
/* // 1 Dimemtional  array 
var scores = [2,3,6,5,8,4,9,8];

function highestScore(scores){
    var hScore = scores[0];
    for (var i= 1; i< scores.length; i++){

        if(hScore < scores[i]){
            hScore = scores[i];
            
        }
    }
    return hScore;
}
var maxScore = highestScore(scores);
console.log(maxScore);
 */

/* //2D Array 
function highestRunScorer(playersInfo){
    var nameofscorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    for(var i = 0; i < 5;i++  ){
        for(var j = 0; j < 2; j++){
            if(nameofscorer < playersInfo[i][1]){
                highestScore = playersInfo[i][1];
                nameofscorer = playersInfo[i][0];

            }

        }
    }
    return nameofscorer;
}


var playersInfo = [
    ["shanto", 55],
    ["akib", 94],
    ["sakib", 75],
    ["sajib", 92],
    ["sahin", 53]

]
 var name = highestRunScorer(playersInfo);
 console.log(name); */


//------------------Object -------------&& ----Constractor ----------
//how to create an object and how to print from  it
//adding constractor-- function that makes tamplete 
/* 
//adding a constrctor
function Student(name, age, cgpa, language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;

    //adding a function in the constructor for display
    this.display = function display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.language);

    }

}
    //initialize value
    var Student1 = new Student("Shnato",21, 3.23, ["benglai","English"]);
    var Student2 = new Student("sakib",23, 3.3, ["benglai","English", "ararbic"]);
//print
Student1.display();
Student2.display();
 */
//another Example of object and constructor 
/* 
//Adding a constructor
function Employee(name, age, dob, phone){
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.phone = phone;
    //Creating a funtion in the constructor
    this.display = function display(){        
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.phone);


    }
}
//Initialize value
var Employee1 = new Employee("Shanto", 24, 1998, 01625);
var Employee2 = new Employee("Akib",12, 2233, 234234324);

//Print
Employee1.display();
Employee2.display();
//for single Output
console.log(Employee2.name); */


//-----------Math Object--------------
var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");

// find maximum
var maximum = Math.max(num1 , num2);

if (maximum == num1) {
    console.log("Number 1 is the maximum");

}
else 
console.log("Number 2 is the maximum");
