//4 ways to call api - XMLHttpRequest, fetch, axios, jquery
//fetch() has replaced XMLHttprequest 
// fetch() -> global method for making HTTP Request
// 2 ways to call - then, await for fetch()
 //positive --> easy to use compare to XMLHttpRequest,  fetch() returns promise
 //Negative   --> returned promise can only handle network error, does not support older version

 //--------------------------then method--------------------------------------------------
 console.clear();
 /* //creating a resouse 
    //send data
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          })

    })
    .then((res) =>{
        if( !res.ok){
            const message = `Error: ${res.status}`
            throw new Error(message);
        }
        return res.json();
    })
    .then((res) => console.log(res)) 
    .catch((err)=> console.log(err)); 

    //update
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            id:1,
            title: 'shanto',
            body: 'haha',
            userId: 1,
          })

    })
    .then((res) =>{
        if( !res.ok){
            const message = `Error: ${res.status}`
            throw new Error(message);
        }
        return res.json();
    })
    .then((res) => console.log(res)) 
    .catch((err)=> console.log(err)); 
    
    //single update
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PATCH',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            
            title: 'heyyy',
            
          })

    })
    .then((res) =>{
        if( !res.ok){
            const message = `Error: ${res.status}`
            throw new Error(message);
        }
        return res.json();
    })
    .then((res) => console.log(res)) 
    .catch((err)=> console.log(err)); 

            //delete
            fetch('https://jsonplaceholder.typicode.com/posts/1',{
                method: 'DELETE',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                
        
            })
            .then((res) =>{
                if( !res.ok){
                    const message = `Error: ${res.status}`
                    throw new Error(message);
                }
                return res.json();
            })
            .then((res) => console.log(res)) 
            .catch((err)=> console.log(err));       */  


     //--------------------------await method--------------------------------------------------

    
     const makeRequest = async (url,config) =>{
        const res =  fetch(url,config);
        if(!(await res).ok){
            const message = `Error: ${res.status}`;
            throw new Error(message);
        }
        const response =  (await res).json();
        return response;

     }
     /* //getData
     const getData=() => {
        makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> console.log(res))
        .catch((err) => console.log(err));
     }
     getData(); */
     //sendData
     const sendData=() => {
        makeRequest('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then((res)=> console.log(res))
        .catch((err) => console.log(err));
     };
     sendData(); 
     //update
     const updateData=() => {
        makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              title: 'shanto',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then((res)=> console.log(res))
        .catch((err) => console.log(err));
     };
     updateData();

