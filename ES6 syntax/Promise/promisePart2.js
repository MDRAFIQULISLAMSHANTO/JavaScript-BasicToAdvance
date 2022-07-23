 // Promise chaining 
console.log("HI!")
    const taskOne =()=>{
        return new Promise((resolve,reject)=>{
            resolve(" Task One is Completed");
        });
    };
    const taskTwo =()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(" Task Two is Completed");

            },2000)
            
        });
    };
    const taskThree =()=>{
        return new Promise((resolve,reject)=>{
            reject(" Task Three is not Completed");
        });
    };
    const taskFour =()=>{
        return new Promise((resolve,reject)=>{
            resolve(" Task Four is Completed");
        });
    };

    taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res)=> console.log(res))
    .then(taskFour)
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); //when reject occures the rest will not be printed

    console.log("End");
