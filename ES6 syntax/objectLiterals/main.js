//Object Literals
const StudentInfo =  (name, age) =>{ //ES6 method function call 
    return{
        name,
        age
    }

}
console.log("shanto", 23);

//Con Size Method to write function in object
let message ={
    body(){
        return`Hi! It is new boy`
    }

}
console.log(message.body());
//another
let message2 ={
    'body name'(){            //for use space in a function name
        return`Hi! it part two`
    }

}
console.log(message2['body name']());