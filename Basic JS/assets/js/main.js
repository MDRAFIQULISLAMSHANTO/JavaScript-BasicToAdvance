
       /*  //--Output
        //alert function
        alert("shanto");
        //document write function for output
        document.write("I am shanto<br>");
        document.write("Name: Shanto ");

        //console for output
        console.log("hey!!!!!!"); */


/* //Variable call 
        var m_name = "shanto";
        document.write(m_name);

        m_name = 5;
        alert(m_name);
 */
       /*  //Number Method 
       var num = 20;
       var num1 =  3.151645;
       num  = parseInt(num);
       document.write(typeof(num));
       document.write(num1.toFixed(2 ));//after . how many number
       document.write(num1.toPrecision(3));// total number
    
 */
      /*  //add or concatente multi strings
       var fName = "rafiqul" ;
       var lName = " islam";
       var fulName= fName + lName;
       var d = "So, ";
       document.write( d + "My name is "+ fulName +"<br>");

       //add
       var num1 = 23;
       var num2 = 45;
       var fnum= num1 + num2;
       document.write(fnum);
 */
    //----Library function --------
    //for find length 
    /* var text =prompt("Enter Word : ");
    var text2 =prompt("Enter Word : ");

    var lofText =  text.length;
    document.write("Number of chr = "+lofText); 
    document.write("<br>"+text.length); 
    //print from index 
    document.write("<br>"+ text.charAt(3));
    //Conver to upper case
    var text3 = text.toLowerCase();
    document.write( text3 + "<br>");
    document.write(text.toUpperCase()+ "<br>");
    //add two strings or concatetion
    var addTstrings= text.concat(text2)
    document.write(addTstrings + "<br>");
    //slice functioon
    var text4 = text.slice(0,3);
    document.write(text4); */
    /* //task2
    var fName = prompt("Enter First Name : ");
    var lName = prompt("Enter Last");
    var fullName = fName + lName;
    document.write(fullName + "<br>");
    document.write(fullName.length+ "<br>");
    document.write(fullName.toUpperCase()+ "<br>");
    document.write(fullName.charAt(1)); */

    /* //----operator-----
    //Arithmethic Operator --> +,- , *,/,%, **(Exponetnt),++, --
    ///Assignment Operator --> =, +=, -=, *=, /=, **=
    var x = 3 ;
    x+=6;//x = x +6
    document.write(x); */

  /*   //Make Calculator 
    var num1 = prompt("Enter First Number : ");
    var num2 = prompt("Enter Second Number : ");

    //convert to intiger
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    //calculate 
    var add,sub,mul,div,mod;
    add = num1 + num2;
    sub = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    mod = num1 % num2;

    document.write("add : "+ add + "<br>");
    document.write("sub : "+ sub + "<br>");
    document.write("mul : "+ mul + "<br>");
    document.write("div : "+ div + "<br>");
    document.write("mod : "+ mod + "<br>"); */

    /* //Calculate Area of any shape
    var base = parseFloat(prompt("1: "));
    var height = parseFloat(prompt("2:"));
    var result = base * height;
    document.write(result);
 */
    //Relationa operator --> >, >= , <, < = , ==, !=,!==
    //Logical operator --> &&, ||, ! 
   /*  var num1 = 60;
    var num2 = 40;
    var num3 = 50;

    console.log(num1>num2 && num1> num3);
    console.log(num1>num2 || num1> num3);
    console.log(!(num1>num2 || num1> num3));//! not ....opoisite outrput 
     */
 /*    //--------If- Else--------
    var num = 5;

    if(num%2 == 0 )
    document.write("Event");

    else
    document.write("odd"); 
    //Grading
    var marks = parseInt(prompt("Enter: "));
    if(marks >=80)
        document.write("A+");
    else if(marks >=70&& marks <80 )
        document.write("A");
    else if(marks >=60&& marks <70)
        document.write("B");
    else if(marks >=50&& marks <60)
        document.write("C");
    else
        document.write("Fail");
   
 */
        //------Switch
        //digit spelling
        //switch, case, break, default
/* 
        var digit = prompt("ENter num: ");
        switch(digit){
            case"0":
                document.write("Zero");
                break;
            case"1":
                document.write("one");  
                break;
            case"2":
                document.write("two");
                break;
            case"3":
                document.write("three"); 
                break; 

            case"4":
                document.write("four");
                break;

            case"5":
                document.write("five");
                break;
            case"6":
                document.write("six");
                break;
            case"7":
                document.write("seven");
                break;
            case"8":
                document.write("eight");
                break;
            case"9":
                document.write("nine"); 
                break;  
            default:
                document.write("not a num" );   


        } */
        /* // vowel consonent using switch case
        var latter = prompt("Enter: ");
        latter =  latter.toLowerCase();
        if(latter.length ==1)
                switch(latter){
                    case "a":
                    case "e":
                    case "i":
                    case "o":
                    case "u":
                        document.write("Vowel");
                        break;
                    default:
                    document.write("Consonent");
                }
        else

                document.write("latter must be only one ") */

//----Loop 
/* //for loop,while, do while
var sum = 0;

var n= prompt("n+ ");
for(var x=0;x<=n;x++){
    //document.write("shanto "+"<br>");
    //document.write(" "+x);
    sum += x;
}
document.write("sum= "+sum); */
/* //while loop
var i = 0;
while(i<= 5){
    document.write(" "+ i);
    i += 1;

}
 */
/* //do while
var i = 0;

do{
    document.write(" "+ i);
    i++;

}while(i<= 13);
 */

//----------------Ternary Condition ------------\+

 /* var num = prompt("Enter the Number : ");

var result = num > 0 ? "True" : "False";
console.log(result); 
//another print
num > 0 ? console.log("True") : console.log("False");
//If Condition is more the two 
num > 0 ? console.log("True"): num < 0 ? console.log("False") : console.log("zero"); */

//---------------Function ------------------
/* //Creating function
    function sqare(num1, num2){

        //var num = 5;
        var result = num1 * num2 ;
       // document.write(result + "<br>");
       return result;



    }
//Calling function 

//sqare(5,6);

//document.write(sqare(5,6) + "<br>");
var  x =  sqare(5,6);
document.write(x + "<br>"); */
//practice
//creating function
//add
/* function add(x,y) {
    var result = x + y ;
    return result;

}
function sub(x,y){
    var result = x-y;
    return result;

}

document.write("additon : "+ add(5,6)+ "<br>" + "sub : "+ sub(6,5));
 */
//----------IIFs (Immediatedly Invokeable Fuction Expressions)----------------------
//Function Expressions
//Imifiate function call
/* (function display(message) {
    console.log(message);
})("hello");
 */
/* //function Expression 
var display1 = function displayMessage(){
    console.log("Hello! I am Shanto");
};
display1(); */







