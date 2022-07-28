/* // axios is a js libary
// it helps to make request from browser(plain js/vue/React/Angular), node.js
//positive: very easy to use , supports all modern browser including IE
            //returns promise, throws error brilliantly
            //No need to set header cause axios is inteeligent
//Methods:  
            //axios(config)
            //axios(url[,config])
            //axios(url.get [,config])          
            //axios(url.post [,config])          
            //axios(url.put [,config])          
            //axios(url.patch [,config])          
            //axios(url.delete [,config]) 
            
            //axios returns response object ---> data, status, statusText, headers,config */

    
            const makeRequest = async (config) =>{
                return await axios(config);

            }
                    //get data
            const getData=()=>{
                makeRequest('https://jsonplaceholder.typicode.com/posts/1')
                .then((res)=> console.log(res))
                .catch((err)=> console.log(err));

            }
            //getData();
                    //send data
            const sendData =() =>{
                makeRequest({
                url:'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                body: JSON.stringify({
                  title: 'foo',
                  body: 'bar',
                  userId: 1,})})
                .then((res)=> console.log(res))
                .catch((err)=> console.log(err));
            }
            sendData();
        


