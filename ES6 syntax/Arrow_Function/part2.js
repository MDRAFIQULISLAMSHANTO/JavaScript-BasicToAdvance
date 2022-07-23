//Arrow function with map,filter
var students =[
    {
    name : "shanto",
    age: 45,
    cgpa:3.4
      },
        {
        name : "rakib",
        age: 456,
        cgpa:2.4
        },
        {
            name : "khadi",
            age: 45,
            cgpa:3.9
            },

]
    const studentName = () => students.filter((x)=> x.cgpa > 3).map((y)=> y.name); //filtering and mapping
    
    console.log(studentName());