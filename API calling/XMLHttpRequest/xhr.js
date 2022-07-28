//xhr =  xml http request
console.clear();

    //event :  onload(), onerror()
    //property: response,responseText,responseType, responseURL, status, statusText
    // function: open(), send(), setRequestHeader()

    //create request function
    const makeRequest =(method,url,data) => {
        
        return new Promise ((resolve, reject) => {  //by Creating promise 
            const xhr = new XMLHttpRequest();
        xhr.open(method, url); //fake api link form website
        xhr.setRequestHeader('content-type','application/json');

        xhr.onload = () => {
            let data  = xhr.response;
            console.log(JSON.parse(data));
        }
        xhr.onerror = () => {
            console.log("There is a error");
        }
        xhr.send(JSON.stringify(data));

        })
        

    }
    const getData=()=>{
        makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
    }
    const sendData = () =>{
        
        makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
          .then((res) => console.log(res))
          ;
    }
    const updateData = () =>{
        let api = {
            title: 'shanto',
            body: 'shanto2',
            userId: 1,
          };
        
        makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',api);
    }
    const updateSingleData = () =>{
        let api = {
            title: 'changed',
            
          };
        
        makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',api);
    }
    const deleteData = () =>{
        let api = {
            title: 'shanto',
            body: 'shanto2',
            userId: 1,
          };
        
        makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1',api);
    }

    // getData();

    sendData(); 
    //updateData();
    //updateSingleData();
   //deleteData(); 