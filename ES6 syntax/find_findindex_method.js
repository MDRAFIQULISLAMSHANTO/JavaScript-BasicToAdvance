const students = [
    {
        //name : Shanto,
        age: 23,
        cgpa: 3.1
    },
    {
        //name : khadi,
        age: 21,
        cgpa: 4
    },
    {
       // name : shanta,
        age: 13,
        cgpa: 2.1
    }

]
     
    //let findCgpa =  students.find(x => x.cgpa > 3);
     
    console.log(students.find(x => x.cgpa > 3));
    console.log(students.findIndex(x => x.cgpa > 3));