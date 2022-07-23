//using await function for pormise chaining
//use try for error handking
//es7 concept await function

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

/* taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res)=> console.log(res))
.then(taskFour)
.then((res) => console.log(res))
.catch((err) => console.log(err)); //when reject occures the rest will not be printed */
    //async function callAllTasks(){} --Tradional method
    const callAllTasks = async () => {
        try{
            const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);

        }catch(err){
            console.log(err);

        };

    };
    callAllTasks();