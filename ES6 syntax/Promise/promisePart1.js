//Create a promise
    const promise1 = new Promise((resolve, reject) => {
        let completedPromise = true;
        if(completedPromise){
            setTimeout(() =>{
                resolve("Completed Promise 01");

            },2000)
            
        }else{
            reject("Not Completed Promise 01");

        }

    })
    const promise2 = new Promise((resolve,reject) => {
        let completedPromise2 = true;
        if (completedPromise2){
            setTimeout(() =>{
                resolve("Completed promise 2");

            },3000)
            
        }else{

            reject("Not Compeleted promise 2");
        }
    })

//call promise
                                                //Method 1
    /* promise1
    .then((res) => console.log(res))
    .catch((err) =>console.log(err)); */
                                                //Method 2 
    /* Promise.all([promise1,promise2]) //combine all promises
    .then((res1,res2) => console.log([res1,res2]))
    .catch((err1,err2) => console.log(err1,err2)) */
                                               //Method 3 Race
    Promise.race([promise1,promise2]) //race and output the first come first in
    .then((res) => console.log([res]))
    .catch((err) => console.log(err))                                                                                      


