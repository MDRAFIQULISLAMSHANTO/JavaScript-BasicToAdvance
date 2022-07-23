//map = No need to add new array
var numbers = [10,20,30];
var squareNumbers= numbers.map(function(x){
    return x*x;
})
console.log(numbers);
console.log(squareNumbers);

//filter function
var numbers = [10,20,30,6,7,8];
var newNumbers= numbers.filter(function(x){
    return x>10;
})
console.log(numbers);
console.log(newNumbers);

