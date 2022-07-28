       console.clear();

       const makeRequest = async (url, method,data) => {
           try{
               const result  =  $.ajax({
                   url : url ,
                   mathod : method,
                   data:data
               });
               return result;
           }catch(crr){
               console.log(err);

           }
       };
           const getData=() =>{
               makeRequest('https://jsonplaceholder.typicode.com/posts',"GET")
               .then((res)=>console.log(res))
               //.catch((err)=>console.log(err));

           };
           //getData();
           const sendData=()=>{
               makeRequest('https://jsonplaceholder.typicode.com/posts/1',"POST",{
                   title: 'foo',
                   body: 'bar',
                   userId: 1,
                 })
               .then((res)=> console.log(res))


           }
           sendData();

